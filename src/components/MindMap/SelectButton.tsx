import { PiSelectionPlusDuotone } from "react-icons/pi";
import Button from "./Button";
import DragMode from "../../entities/DragMode";
import useRFStore from "./store";
import { useShallow } from "zustand/react/shallow";

const SelectButton = () => {
    const [dragMode, setDragMode] = useRFStore(
        useShallow((s) => [s.dragMode, s.setDragMode])
    );
    return (
        <Button
            className={dragMode === "select" ? "text-blue-700 bg-blue-200" : ""}
            dataTooltipId="select-button"
            onClick={() => {
                setDragMode(DragMode.Select);
            }}
            tooltipContent="select">
            <PiSelectionPlusDuotone />
        </Button>
    );
};

export default SelectButton;
