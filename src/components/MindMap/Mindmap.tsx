import ReactFlow, {
    Background,
    Controls,
    Panel,
    useOnSelectionChange,
} from "reactflow";
import useRFStore from "./store";
import CustomNode from "./CustomNode";
import DeleteButton from "./DeleteButton";
import AddNodeButton from "./AddNodeButton";
import DownloadButton from "./DownloadButton";
import "reactflow/dist/style.css";
import LayoutButtons from "./LayoutButtons";

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
            <Background gap={25} />
            <Controls showInteractive={false} />
            <Panel position="top-left">Mind Map</Panel>
            <Panel position="bottom-right">
                <AddNodeButton />
                <DeleteButton />
                <LayoutButtons />
                <DownloadButton />
            </Panel>
        </ReactFlow>
    );
};

export default Mindmap;
