import { useEffect } from "react";
import ReactFlow, {
    Background,
    Controls,
    Panel,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
} from "reactflow";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import useRFStore from "./store";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import DeleteButton from "./DeleteButton";
import AddNodeButton from "./AddNodeButton";
import DownloadButton from "./DownloadButton";
import LayoutButtons from "./LayoutButtons";
import ColorPicker from "./ColorPicker";
import HandleElementCustom from "../../entities/HandleElementCustom";
import useDashboardStore from "../../store";
import "reactflow/dist/style.css";

const socket = io("http://localhost:8000", {
    autoConnect: false,
    reconnectionDelay: 10000,
});

const nodeTypes = {
    mindmap: CustomNode,
};

const edgeTypes = {
    "custom-edge": CustomEdge,
};

function MindmapFlow() {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        setSelectedNode,
        setSelectedEdge,
    } = useRFStore();
    const { getNodes, getEdges, setNodes, setEdges } = useReactFlow();
    const currentMindmap = useDashboardStore((s) => s.currentMindmap);
    const { pathname } = useLocation();
    const user = localStorage.getItem("current_user");

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setSelectedNode(nodes);
            setSelectedEdge(edges);
        },
    });

    useEffect(() => {
        const handles = Array.from(
            document.querySelectorAll(".react-flow__handle")
        ) as HandleElementCustom[];

        const focusElement = document.activeElement?.tagName;

        if (focusElement === "BODY" || focusElement === "DIV") {
            handles.forEach((handle) => {
                handle.style!.opacity = 0;
            });
        } else {
            handles.forEach((handle) => {
                handle.style!.opacity = 1;
            });
        }
    }, [document.activeElement]);

    useEffect(() => {
        socket.connect();

        if (currentMindmap.fileId) {
            setNodes(currentMindmap.nodes);
            setEdges(currentMindmap.edges);
        }

        return () => {
            socket.emit("save", {
                nodes: getNodes(),
                edges: getEdges(),
                fileId: pathname.slice(-10),
                user,
            });
            socket.disconnect();
        };
    }, []);

    return (
        <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView>
            <Background gap={25} />
            <Controls showInteractive={false} />
            <Panel position="bottom-right">
                <ColorPicker />
                <AddNodeButton />
                <DeleteButton />
                <LayoutButtons />
                <DownloadButton />
            </Panel>
        </ReactFlow>
    );
}

function Mindmap() {
    return (
        <ReactFlowProvider>
            <MindmapFlow />
        </ReactFlowProvider>
    );
}

export default Mindmap;
