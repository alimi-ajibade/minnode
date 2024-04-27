import { Background, ReactFlow, ReactFlowProvider } from "reactflow";
import MindMap from "../entities/Mindmap";
import CustomNode from "./MindMap/CustomNode";
import CustomEdge from "./MindMap/CustomEdge";

interface Props {
    mindmap: MindMap;
}

const nodeTypes = {
    mindmap: CustomNode,
};

const edgeTypes = {
    "custom-edge": CustomEdge,
};

const CardFlow = ({ mindmap }: Props) => {
    return (
        <ReactFlowProvider>
            <ReactFlow
                nodes={mindmap.nodes}
                edges={mindmap.edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView>
                <Background />
            </ReactFlow>
        </ReactFlowProvider>
    );
};

export default CardFlow;
