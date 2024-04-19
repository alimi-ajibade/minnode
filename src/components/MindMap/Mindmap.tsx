import { useEffect } from "react";
import ReactFlow, {
    Background,
    Controls,
    Panel,
    useOnSelectionChange,
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

function Mindmap() {
    const {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        setSelectedNode,
        setSelectedEdge,
    } = useRFStore();
    const { pathname } = useLocation();

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

        return () => {
            socket.emit("save", { nodes, edges, name: pathname.slice(-10) });
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

export default Mindmap;
