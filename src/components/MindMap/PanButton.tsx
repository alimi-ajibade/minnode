import { useShallow } from "zustand/react/shallow";
import { TfiHandDrag } from "react-icons/tfi";
import Button from "./Button";
import useRFStore from "./store";
import DragMode from "../../entities/DragMode";

const PanButton = () => {
    const [dragMode, setDragMode] = useRFStore(
        useShallow((s) => [s.dragMode, s.setDragMode])
    );
    return (
        <Button
            className={dragMode === "pan" ? "text-blue-700 bg-blue-200" : ""}
            dataTooltipId="pan-button"
            onClick={() => setDragMode(DragMode.Pan)}
            tooltipContent="pan">
            <TfiHandDrag />
        </Button>
    );
};

export default PanButton;
