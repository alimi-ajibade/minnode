import { useCallback, useEffect } from "react";
import Mindmap from "../components/MindMap/Mindmap";
import useRFStore from "../components/MindMap/store";
import IMindMap from "../entities/Mindmap";
import useDashboardStore from "../store";
import { useBeforeUnload, useBlocker, useLocation } from "react-router-dom";

const MindMapPage = () => {
    const resetAll = useRFStore((s) => s.resetAll);
    const setCurrentMindmap = useDashboardStore((s) => s.setCurrentMindmap);
    const location = useLocation();

    useEffect(() => {
        const onUnload = () => {
            localStorage.setItem("leaving", "234");
        };
        window.onbeforeunload = () => {
            onUnload();
        };

        window.addEventListener("beforeunload", (event) => {
            onUnload();
        });

        return () => {
            document.removeEventListener("beforeunload", onUnload);
        };
    });

    return (
        <div className="relative w-screen h-screen">
            <Mindmap />
        </div>
    );
};

export default MindMapPage;
