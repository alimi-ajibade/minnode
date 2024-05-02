import { useEffect, useState } from "react";
import ReactFlow, {
    Background,
    Controls,
    useOnSelectionChange,
    ReactFlowProvider,
    useReactFlow,
} from "reactflow";
import io from "socket.io-client";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import useRFStore from "./store";
import useMindmap from "../../hooks/useMindmap";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import HandleElementCustom from "../../entities/HandleElementCustom";
import ControlPanel from "./ControlPanel";
import "reactflow/dist/style.css";
import useDashboardStore from "../../store";

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

    const { setNodes, setEdges, getNodes, getEdges } = useReactFlow();

    const { pathname } = useLocation();

    const { data: mindmap } = useMindmap(pathname.slice(-10));
    const templateMindmap = useDashboardStore((s) => s.currentMindmap);
    const setTemplateMindmap = useDashboardStore((s) => s.setCurrentMindmap);

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

        return () => {
            resetAll();
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
