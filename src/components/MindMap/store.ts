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
} from "reactflow";
import { create } from "zustand";

export interface NodeData {
    label: string;
    note?: string;
    backgroundColor?: string;
}

export interface RFState {
    selectedNode: Node<NodeData>;
    nodes: Node<NodeData>[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    setSelectedNode: (nodes: Node<NodeData>[]) => void;
    addNodeUsingForm: (label: string, note?: string, color?: string) => void;
    updateNode: (data: NodeData) => void;
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
    edges: [],

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

    updateNode: (data) => {
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
}));

export default useRFStore;
