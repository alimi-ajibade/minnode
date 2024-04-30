import { useEffect, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
} from "reactflow";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import useRFStore from "./store";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import HandleElementCustom from "../../entities/HandleElementCustom";
import useDashboardStore from "../../store";
import MindMap from "../../entities/Mindmap";
import "reactflow/dist/style.css";
import { toast } from "react-toastify";
import ControlPanel from "./ControlPanel";

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
        resetAll,
    } = useRFStore();
    const { getNodes, getEdges, setNodes, setEdges } = useReactFlow();

    const currentMindmap = useDashboardStore((s) => s.currentMindmap);
    const setCurrentMindmap = useDashboardStore((s) => s.setCurrentMindmap);
    const { pathname } = useLocation();

    const [showColorPicker, setShowColorPicker] = useState(false);

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

        socket.on("connect", () => {
            // console.log(socket);
            if (socket.recovered)
                toast("Connection restored", { type: "success" });
        });

        setTimeout(() => {
            if (socket.io.engine) {
                // close the low-level connection and trigger a reconnection
                socket.io.engine.close();
            }
        }, 10000);

        socket.on("disconnect", () => {
            // toast.dismiss();
            // toast(
            //     "You're offline, your progress won't be saved. Reconnecting...",
            //     { autoClose: false }
            // );
        });

        if (currentMindmap?.fileId) {
            setNodes(currentMindmap.nodes);
            setEdges(currentMindmap.edges);
        }

        return () => {
            setCurrentMindmap({} as MindMap); // shouldn't be here
            resetAll(); // shouldn't be here

            socket.emit("save", {
                nodes: getNodes(),
                edges: getEdges(),
                fileId: pathname.slice(-10),
                filename: currentMindmap?.filename,
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
            onPaneClick={() => {
                setShowColorPicker(false);
            }}
            fitView>
            <Background gap={15} />
            <Controls showInteractive={false} />
            <ControlPanel
                showColorPicker={showColorPicker}
                setShowColorPicker={setShowColorPicker}
            />
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
