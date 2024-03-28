import ReactFlow, { Controls, Panel, useOnSelectionChange } from "reactflow";
import useRFStore from "./store";
import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";

const nodeTypes = {
    mindmap: CustomNode,
};

const Mindmap = () => {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        setSelectedNode,
    } = useRFStore();

    useOnSelectionChange({
        onChange: ({ nodes }) => {
            setSelectedNode(nodes);
        },
    });

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            fitView>
            <Controls showInteractive={false} />
            <Panel position="top-left">React Flow Mind Map</Panel>
        </ReactFlow>
    );
};

export default Mindmap;