import ReactFlow, { Background, ReactFlowProvider } from "reactflow";
import "reactflow/dist/style.css";

const edges = [{ id: "1-2", source: "1", target: "2" }];

const nodes = [
    {
        id: "1",
        data: { label: "Hello" },
        position: { x: 0, y: 0 },
        type: "input",
    },
    {
        id: "2",
        data: { label: "World" },
        position: { x: 100, y: 100 },
    },
];

function Flow() {
    return (
        <ReactFlowProvider>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                edgesUpdatable={false}
                edgesFocusable={false}
                nodesDraggable={false}
                nodesFocusable={false}
                draggable={false}
                panOnDrag={false}
                fitView>
                <Background />
            </ReactFlow>
        </ReactFlowProvider>
    );
}

export default Flow;
