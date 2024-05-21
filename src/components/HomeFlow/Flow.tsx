import ReactFlow, { Background, ReactFlowProvider } from "reactflow";
import exampleMindmap from "./ExampleMindmap";
import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";

const edges = exampleMindmap.edges;
const nodes = exampleMindmap.nodes;
const nodeTypes = {
    mindmap: CustomNode,
};

function Flow() {
    return (
        <ReactFlowProvider>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgesUpdatable={false}
                edgesFocusable={false}
                nodesDraggable={false}
                nodesFocusable={false}
                draggable={false}
                panOnDrag={false}
                zoomOnPinch={false}
                fitView>
                <Background />
            </ReactFlow>
        </ReactFlowProvider>
    );
}

export default Flow;
