import { useEffect } from "react";
import ReactFlow, {
    Background,
    Controls,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
    Panel,
    ConnectionMode,
} from "reactflow";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import useRFStore from "./store";
import { useShallow } from "zustand/react/shallow";
import useMindmap from "../../hooks/useMindmap";
import useUIStore from "../../store";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import { PiPresentationDuotone } from "react-icons/pi";
import ControlPanel from "./ControlPanel";
import socket from "../../services/socket-client";
import Button from "./Button";
import TopLeftPanel from "./TopLeftPanel";
import TopRightPanel from "./TopRightPanel";
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
        setSelectedEdge,
        setSelectedNodes,
        onConnect,
        onSelectionEnd,
        resetAll,
    ] = useRFStore(
        useShallow((s) => [
            s.nodes,
            s.edges,
            s.onNodesChange,
            s.onEdgesChange,
            s.setSelectedEdge,
            s.setSelectedNodes,
            s.onConnect,
            s.onSelectionEnd,
            s.resetAll,
        ])
    );

    const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();
    const { pathname } = useLocation();
    const { data: mindmap, isLoading } = useMindmap(pathname.slice(-10));
    const user = JSON.parse(sessionStorage.getItem("current_user")!)?.email;
    const connectionMode = ConnectionMode.Loose;

    const [
        templateMindmap,
        presentationMode,
        setShowColorPicker,
        setShowLogout,
        setPresentationMode,
        setShowAssistant,
        setShowNodeHandles,
    ] = useUIStore(
        useShallow((s) => [
            s.currentMindmap,
            s.presentationMode,
            s.setShowColorPicker,
            s.setShowLogout,
            s.setPresentationMode,
            s.setShowAssitant,
            s.setShowNodeHandles,
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

    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setSelectedNodes(nodes);
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

    if (presentationMode)
        return (
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                edgesUpdatable={false}
                edgesFocusable={false}
                nodesDraggable={false}
                nodesFocusable={false}
                draggable={false}
                panOnDrag={false}
                fitView>
                <Panel position="top-right">
                    <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md box-border w-content bg-white">
                        <Button
                            dataTooltipId="presentation-mode"
                            tooltipContent="Presentation Mode"
                            onCLick={() => setPresentationMode()}>
                            <PiPresentationDuotone />
                        </Button>
                    </div>
                </Panel>
            </ReactFlow>
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
            onSelectionEnd={onSelectionEnd}
            deleteKeyCode={"Delete"}
            // selectionOnDrag={true}
            // panOnDrag={false}
            connectionMode={connectionMode}
            onConnectStart={() => setShowNodeHandles(true)}
            onConnectEnd={() => setShowNodeHandles(false)}
            onPaneClick={() => {
                setShowColorPicker(false);
                setShowLogout(false);
                setShowAssistant(false);
            }}
            fitView>
            <Background gap={18} />
            <Controls showInteractive={false} />
            <ControlPanel />
            <Panel position="top-left">
                <TopLeftPanel
                    filename={
                        templateMindmap.filename
                            ? templateMindmap.filename
                            : mindmap?.filename
                    }
                />
            </Panel>

            <Panel position="top-right">
                <TopRightPanel />
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
