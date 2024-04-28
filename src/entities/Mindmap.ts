interface MindMapNode {
    id: string;
    type: string;
    data: { label: string; note?: string; backgroundColor: string };
    position: { x: number; y: number };
    width: number;
    height: number;
}

interface MindMapEdge {
    id: string;
    source: string;
    target: string;
    sourceHandle: string;
    targetHandle: string;
    type: string;
}
interface MindMap {
    _id: string;
    fileId: string;
    filename: string;
    nodes: MindMapNode[];
    edges: MindMapEdge[];
    last_modified: string;
}

export default MindMap;
