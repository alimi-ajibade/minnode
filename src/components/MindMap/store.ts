import { nanoid } from "nanoid";
import {
    applyEdgeChanges,
    applyNodeChanges,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    OnEdgesChange,
    OnNodesChange,
    Connection,
    OnConnect,
    addEdge,
    getIncomers,
    getOutgoers,
    getConnectedEdges,
} from "reactflow";
import { create } from "zustand";

export interface NodeData {
    label: string;
    note?: string;
    backgroundColor?: string;
}

export interface RFState {
    nodes: Node<NodeData>[];
    selectedNode: Node<NodeData>;
    onNodesChange: OnNodesChange;
    setSelectedNode: (nodes: Node<NodeData>[]) => void;
    addNodeUsingForm: (label: string, note?: string, color?: string) => void;
    addNode: () => void;
    updateNodeUsingForm: (data: NodeData) => void;
    updateNodeLabel: (label: string) => void;
    deleteNode: () => void;
    edges: Edge[];
    selectedEdge: Edge;
    onEdgesChange: OnEdgesChange;
    setEdges: (edges: Edge[]) => void;
    onConnect: OnConnect;
    deleteEdge: () => void;
    setSelectedEdge: (edges: Edge[]) => void;
}

const useRFStore = create<RFState>((set, get) => ({
    selectedNode: {} as Node<NodeData>,
    nodes: [
        {
            id: "root",
            type: "mindmap",
            data: { label: "React Flow Mind Map", backgroundColor: "E9EBEA" },
            position: { x: 0, y: 0 },
        },
    ],
    selectedEdge: {} as Edge,
    edges: [],

    setEdges: (edges: Edge[]) => {
        set({ edges });
    },

    onNodesChange: (changes: NodeChange[]) => {
        set({ nodes: applyNodeChanges(changes, get().nodes) });
    },

    onEdgesChange: (changes: EdgeChange[]) => {
        set({ edges: applyEdgeChanges(changes, get().edges) });
    },

    onConnect: (connection: Connection) => {
        set({ edges: addEdge(connection, get().edges) });
    },

    setSelectedNode: (nodes) => {
        set({
            selectedNode: nodes.find((node) => node.selected === true),
        });
    },

    setSelectedEdge: (edges) => {
        set({
            selectedEdge: edges.find((edge) => edge.selected === true),
        });
    },

    addNodeUsingForm: (label, note, color) => {
        const currentNodes = get().nodes;
        const lastNodePosition = currentNodes[currentNodes.length - 1].position;

        const newNode = {
            id: nanoid(),
            type: "mindmap",
            data: { label: label, backgroundColor: color, note: note },
            position: {
                x: lastNodePosition.x + 50,
                y: lastNodePosition.y + 50,
            },
        };

        set({ nodes: [...currentNodes, newNode] });
    },

    addNode: () => {
        const currentNodes = get().nodes;
        const lastNodePosition = currentNodes[currentNodes.length - 1].position;

        const newNode = {
            id: nanoid(),
            type: "mindmap",
            data: { label: "New Node", backgroundColor: "E9EBEA", note: "" },
            position: {
                x: lastNodePosition.x + 50,
                y: lastNodePosition.y + 50,
            },
        };

        set({ nodes: [...currentNodes, newNode] });
    },

    updateNodeUsingForm: (data) => {
        const selectedNode = get().selectedNode;

        if (selectedNode)
            set({
                nodes: [
                    ...get().nodes.map((node) => {
                        if (node.id === selectedNode.id) {
                            node.data = {
                                ...node.data,
                                label: data.label,
                                backgroundColor: data.backgroundColor,
                                note: data.note,
                            };
                        }

                        return node;
                    }),
                ],
            });
    },

    updateNodeLabel: (label) => {
        const selectedNode = get().selectedNode;

        set({
            nodes: [
                ...get().nodes.map((node) => {
                    if (node.id === selectedNode.id) {
                        node.data = {
                            ...node.data,
                            label: label,
                        };
                    }

                    return node;
                }),
            ],
        });
    },

    deleteNode: () => {
        const nodes = get().nodes;
        const edges = get().edges;

        set({
            nodes: [
                ...get().nodes.filter((node) => {
                    return node.id !== get().selectedNode.id;
                }),
            ],
        });

        get().setEdges(
            [get().selectedNode].reduce((acc, node) => {
                const incomers = getIncomers(node, nodes, edges);
                const outgoers = getOutgoers(node, nodes, edges);
                const connectedEdges = getConnectedEdges([node], edges);

                const remainingEdges = acc.filter(
                    (edge) => !connectedEdges.includes(edge)
                );

                const createdEdges = incomers.flatMap(({ id: source }) =>
                    outgoers.map(({ id: target }) => ({
                        id: `${source}->${target}`,
                        source,
                        target,
                    }))
                );

                return [...remainingEdges, ...createdEdges];
            }, edges)
        );
    },

    deleteEdge: () => {
        const selectedEdge = get().selectedEdge;
        get().setEdges([
            ...get().edges.filter((edge) => edge.id !== selectedEdge.id),
        ]);
    },
}));

export default useRFStore;
