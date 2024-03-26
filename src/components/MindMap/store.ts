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

export interface RFState {
    nodes: Node[];
    edges: Edge[];
    onNodesChange: OnNodesChange;
    onEdgesChange: OnEdgesChange;
    onConnect: OnConnect;
    addNodeUsingForm: (label: string, note?: string, color?: string) => void;
}

const useRFStore = create<RFState>((set, get) => ({
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

    addNodeUsingForm: (label: string, note?: string, color?: string) => {
        const currentNodes = get().nodes;
        const lastNodePosition = currentNodes[currentNodes.length - 1].position;

        const newNode = {
            id: nanoid(),
            type: "mindmap",
            data: { label: label, backgroundColor: color },
            position: {
                x: lastNodePosition.x + 50,
                y: lastNodePosition.y + 50,
            },
        };

        set({ nodes: [...currentNodes, newNode] });
    },

    onConnect(connection: Connection) {
        set({ edges: addEdge(connection, get().edges) });
    },
}));

export default useRFStore;
