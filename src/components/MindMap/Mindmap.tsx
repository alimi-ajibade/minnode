import { useEffect, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
    Panel,
} from "reactflow";
import io from "socket.io-client";
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

import "reactflow/dist/style.css";
import UserProfilePicture from "../UserProfilePicture";
import { PartialMindmap } from "../../entities/Mindmap";

const socket = io("http://localhost:8000", {
    autoConnect: false,
    reconnection: true,
    reconnectionDelay: 10000,
});

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
    ); // improve selection

    const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const { data: mindmap } = useMindmap(pathname.slice(-10));
    const [templateMindmap, setShowLogout, setCurrentMindmap] =
        useDashboardStore(
            useShallow((s) => [
                s.currentMindmap,
                s.setShowLogout,
                s.setCurrentMindmap,
            ])
        );

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

    const user = localStorage.getItem("current_user");

    const [showColorPicker, setShowColorPicker] = useState(false);

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
            if (socket.recovered) {
                console.log("recovered");
            }
        });

        // setTimeout(() => {
        //     if (socket.io.engine) {
        //         // close the low-level connection and trigger a reconnection
        //         socket.io.engine.close();
        //     }
        // }, 5000);

        socket.on("disconnect", () => {
            if (!toast.isActive("disconnect"))
                toast(
                    "You're offline. Your changes won't be saved, reconnecting...",
                    { toastId: "disconnect", autoClose: false }
                );
        });

        return () => {
            resetAll();
            socket.disconnect();
            setCurrentMindmap({} as PartialMindmap);
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
                <div className="flex flex--row items-center justify-center gap-3 py-5 px-3 bg-white hover:cursor-pointer rounded-full shadow-md box-border w-content h-12">
                    <div
                        onClick={() => navigate("/app/dashboard")}
                        className="py-3 px-2 text-lg rounded-md hover:text-blue-500 hover:bg-blue-300 transition duration-300 ease-in-out">
                        <IoIosArrowBack />
                    </div>

                    <UserProfilePicture />

                    <p className="text-lg">
                        {templateMindmap.filename
                            ? templateMindmap.filename
                            : mindmap?.filename}
                    </p>
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
