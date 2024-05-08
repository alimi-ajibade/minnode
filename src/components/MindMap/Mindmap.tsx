import { useEffect, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
    Panel,
} from "reactflow";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import useRFStore from "./store";
import { useShallow } from "zustand/react/shallow";
import useMindmap from "../../hooks/useMindmap";
import useDashboardStore from "../../store";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import HandleElementCustom from "../../entities/HandleElementCustom";
import { IoIosArrowBack } from "react-icons/io";
import ControlPanel from "./ControlPanel";
import UserProfilePicture from "../UserProfilePicture";
import socket from "../../services/socket-client";
import "reactflow/dist/style.css";

const nodeTypes = {
    mindmap: CustomNode,
};

const edgeTypes = {
    "custom-edge": CustomEdge,
};

function MindmapFlow() {
    const [
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        setSelectedNode,
        setSelectedEdge,
        resetAll,
    ] = useRFStore(
        useShallow((s) => [
            s.nodes,
            s.edges,
            s.onNodesChange,
            s.onEdgesChange,
            s.onConnect,
            s.setSelectedNode,
            s.setSelectedEdge,
            s.resetAll,
        ])
    );

    const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { data: mindmap, isLoading } = useMindmap(pathname.slice(-10));
    const [templateMindmap, setShowLogout] = useDashboardStore(
        useShallow((s) => [s.currentMindmap, s.setShowLogout])
    );

    const [showColorPicker, setShowColorPicker] = useState(false);
    const user = JSON.parse(sessionStorage.getItem("current_user")!)?.email;

    useEffect(() => {
        if (mindmap) {
            setNodes(mindmap.nodes);
            setEdges(mindmap.edges);
            return;
        }

        if (templateMindmap.fileId) {
            setNodes(templateMindmap.nodes);
            setEdges(templateMindmap.edges);
            return;
        }
    }, [mindmap]);

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

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setSelectedNode(nodes);
            setSelectedEdge(edges);

            socket.emit("save", {
                nodes: getNodes(),
                edges: getEdges(),
                fileId: pathname.slice(-10),
                filename: templateMindmap.filename
                    ? templateMindmap.filename
                    : mindmap?.filename,
                user,
            });
        },
    });

    useEffect(() => {
        socket.connect();

        return () => {
            const nodes = getNodes();

            if (nodes.length >= 1) {
                socket.emit("save", {
                    nodes: getNodes(),
                    edges: getEdges(),
                    fileId: pathname.slice(-10),
                    filename: templateMindmap.filename
                        ? templateMindmap.filename
                        : mindmap?.filename,
                    user,
                });
            }
            resetAll();
            socket.disconnect();
        };
    }, []);

    useEffect(() => {
        function onDisconnect() {
            if (!toast.isActive("disconnect")) {
                toast(
                    "You're offline. Your changes won't be saved, reconnecting...",
                    {
                        toastId: "disconnect",
                        autoClose: false,
                        containerId: "mindmap",
                    }
                );
                return;
            }
            return;
        }

        function onConnect() {
            if (!toast.isActive("connect")) {
                if (toast.isActive("disconnect")) toast.dismiss("disconnect");
                toast("connected", {
                    toastId: "connect",
                    type: "success",
                    containerId: "mindmap",
                });
            }
        }

        socket.on("disconnect", onDisconnect);
        socket.on("connect", onConnect);

        return () => {
            socket.off("disconnect", onDisconnect);
            socket.off("connect", onConnect);
        };
    }, []);

    if (isLoading)
        return (
            <div className="w-full h-full flex item-center justify-center animate-pulse">
                <img src="/images/icon.png" className="object-contain w-20" />
            </div>
        );

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
                setShowLogout(false);
            }}
            fitView>
            <Background gap={15} />
            <Controls showInteractive={false} />
            <ControlPanel
                showColorPicker={showColorPicker}
                setShowColorPicker={setShowColorPicker}
            />
            <Panel position="top-left">
                <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md box-border w-content bg-white hover:cursor-pointer">
                    <div
                        onClick={() => navigate("/app/dashboard")}
                        className="py-3 px-2 rounded-md hover:text-blue-700 hover:bg-blue-200 transition duration-300 ease-in-out">
                        <IoIosArrowBack />
                    </div>

                    <p>
                        {templateMindmap.filename
                            ? templateMindmap.filename
                            : mindmap?.filename}
                    </p>
                </div>
            </Panel>

            <Panel position="top-right">
                <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md box-border w-content bg-white hover:cursor-pointer">
                    <UserProfilePicture />
                </div>
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
