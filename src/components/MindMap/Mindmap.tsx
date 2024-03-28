import ReactFlow, { Controls, Panel, useOnSelectionChange } from "reactflow";
import useRFStore from "./store";
import CustomNode from "./CustomNode";
import "reactflow/dist/style.css";
import DeleteButton from "./DeleteButton";
import AddNodeButton from "./AddNodeButton";

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
        setSelectedEdge,
    } = useRFStore();

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setSelectedNode(nodes);
            setSelectedEdge(edges);
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
            <AddNodeButton />
            <DeleteButton />
        </ReactFlow>
    );
};

export default Mindmap;
