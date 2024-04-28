import {
    Background,
    Handle,
    NodeProps,
    Position,
    ReactFlow,
    ReactFlowProvider,
} from "reactflow";
import MindMap from "../entities/Mindmap";
import { NodeData } from "./MindMap/store";
import CustomEdge from "./MindMap/CustomEdge";

interface Props {
    mindmap: MindMap;
}

const CustomNode = ({ data }: NodeProps<NodeData>) => {
    return (
        <>
            <div>
                <input
                    defaultValue={data.label}
                    style={{
                        backgroundColor: data.backgroundColor,
                    }}
                    className="p-2 text-center border focus:outline-none"
                />
                <Handle
                    type="target"
                    position={Position.Top}
                    id="targetT"
                    className="opacity-0"
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="sourceB"
                    className="opacity-0"
                />
                <Handle
                    type="source"
                    position={Position.Right}
                    id="sourceR"
                    className="opacity-0"
                />
                <Handle
                    type="target"
                    position={Position.Left}
                    id="targetL"
                    className="opacity-0"
                />
            </div>
        </>
    );
};

const nodeTypes = {
    mindmap: CustomNode,
};

const edgeTypes = {
    "custom-edge": CustomEdge,
};

const CardFlow = ({ mindmap }: Props) => {
    const { nodes, edges } = mindmap;

    return (
        <ReactFlowProvider>
            <ReactFlow
                id={"name"}
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView={true}>
                <Background />
            </ReactFlow>
        </ReactFlowProvider>
    );
};

export default CardFlow;
