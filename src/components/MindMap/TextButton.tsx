import useRFStore from "./store";
import { useShallow } from "zustand/react/shallow";
import Button from "./Button";
import DragMode from "../../entities/DragMode";
import { CgFormatText } from "react-icons/cg";

const TextButton = () => {
    const [dragMode, setDragMode] = useRFStore(
        useShallow((s) => [s.dragMode, s.setDragMode])
    );

    return (
        <Button
            className={dragMode === "text" ? "text-blue-700 bg-blue-200" : ""}
            dataTooltipId="text-button"
            onClick={() => {
                setDragMode(DragMode.Text);
            }}
            tooltipContent="text">
            <CgFormatText />
        </Button>
    );
};

export default TextButton;
