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

interface State {
    nodes: Node<NodeData>[];
    selectedNodes: Node<NodeData>[];
    edges: Edge[];
    selectedEdge: Edge;
}

const initialStates: State = {
    nodes: [
        {
            id: "root",
            type: "mindmap",
            data: { label: "New Node", backgroundColor: "E9EBEA" },
            position: { x: 0, y: 0 },
        },
    ],
    edges: [],
    selectedNodes: [] as Node<NodeData>[],
    selectedEdge: {} as Edge,
};

export interface RFState {
    nodes: Node<NodeData>[];
    selectedNodes: Node<NodeData>[];
    edges: Edge[];
    selectedEdge: Edge;
    onNodesChange: OnNodesChange;
    setSelectedNodes: (nodes: Node<NodeData>[]) => void;
    addNodeUsingForm: (label: string, note?: string, color?: string) => void;
    addNode: () => void;
    updateNodeData: (node: Node, data: NodeData) => void;
    updateNodeLabel: (label: string) => void;
    deleteNode: () => void;
    onEdgesChange: OnEdgesChange;
    setEdges: (edges: Edge[]) => void;
    onConnect: OnConnect;
    deleteEdge: () => void;
    setSelectedEdge: (edges: Edge[]) => void;
    resetAll: () => void;
}

const useRFStore = create<RFState>((set, get) => ({
    ...initialStates,

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
        const edge = { ...connection, type: "custom-edge" };
        set({ edges: addEdge(edge, get().edges) });
    },

    setSelectedNodes: (nodes) => {
        set({
            selectedNodes: nodes.filter((node) => node.selected === true),
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
        let lastNodePosition = { x: 0, y: 0 };

        if (currentNodes.length > 0) {
            lastNodePosition = currentNodes[currentNodes.length - 1].position;
        }

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

    updateNodeData: (node, data) => {
        set({
            nodes: [
                ...get().nodes.map((n) => {
                    if (n.id === node.id) {
                        n.data = {
                            ...n.data,
                            label: data.label,
                            backgroundColor: data.backgroundColor,
                            note: data.note,
                        };
                    }

                    return n;
                }),
            ],
        });
    },

    updateNodeLabel: (label) => {
        [...get().selectedNodes].forEach((n) => {
            set({
                nodes: [
                    ...get().nodes.map((node) => {
                        if (node.id === n.id) {
                            node.data = {
                                ...node.data,
                                label: label,
                            };
                        }

                        return node;
                    }),
                ],
            });
        });
    },

    deleteNode: () => {
        const nodes = get().nodes;
        const edges = get().edges;
        const selectedNodes = get().selectedNodes;

        selectedNodes.forEach((n) => {
            set({
                nodes: [
                    ...get().nodes.filter((node) => {
                        return node.id !== n.id;
                    }),
                ],
            });

            get().setEdges(
                [n].reduce((acc, node) => {
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
        });
    },

    deleteEdge: () => {
        const selectedEdge = get().selectedEdge;
        get().setEdges([
            ...get().edges.filter((edge) => edge.id !== selectedEdge.id),
        ]);
    },

    resetAll: () => {
        set(initialStates);
    },
}));

export default useRFStore;
