import useRFStore from "./store";
import { TwitterPicker } from "react-color";
import { LuPaintbrush2 } from "react-icons/lu";
import Button from "./Button";
import OutsideClickHander from "../OutsideClickHander";
import useUIStore from "../../store";
import { useShallow } from "zustand/react/shallow";

const ColorPicker = () => {
    const selectedNodes = useRFStore((s) => s.selectedNodes);
    const updateNode = useRFStore((s) => s.updateNodeData);
    const [showColorPicker, setShowColorPicker] = useUIStore(
        useShallow((s) => [s.showColorPicker, s.setShowColorPicker])
    );

    return (
        <>
            <Button
                dataTooltipId="color-button"
                onClick={() => setShowColorPicker(!showColorPicker)}
                tooltipContent="change color"
                disabled={selectedNodes ? false : true}>
                <LuPaintbrush2 />
            </Button>

            {showColorPicker && (
                <div
                    className={`absolute top-[65%] left-16 ${
                        showColorPicker ? "animate-in fade-in zoom-in" : ""
                    }`}>
                    <OutsideClickHander
                        onOutsideClick={() => setShowColorPicker(false)}>
                        <TwitterPicker
                            triangle="hide"
                            onChangeComplete={(color) => {
                                if (selectedNodes.length > 0) {
                                    selectedNodes.forEach((n) => {
                                        updateNode(n, {
                                            ...n.data,
                                            backgroundColor: color.hex,
                                        });
                                    });
                                }
                            }}
                        />
                    </OutsideClickHander>
                </div>
            )}
        </>
    );
};

export default ColorPicker;
