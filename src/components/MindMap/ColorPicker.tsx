import useRFStore from "./store";
import { TwitterPicker } from "react-color";
import { LuPaintbrush2 } from "react-icons/lu";
import Button from "./Button";
import OutsideClickHander from "../OutsideClickHander";

interface Props {
    showColorPicker: boolean;
    setShowColorPicker: (value: boolean) => void;
}

const ColorPicker = ({ showColorPicker, setShowColorPicker }: Props) => {
    const selectedNode = useRFStore((s) => s.selectedNode);
    const updateNode = useRFStore((s) => s.updateNode);

    return (
        <>
            <Button
                dataTooltipId="color-button"
                onCLick={() => setShowColorPicker(!showColorPicker)}
                tooltipContent="change color"
                disabled={selectedNode ? false : true}>
                <LuPaintbrush2 />
            </Button>

            {showColorPicker && (
                <div
                    className={`absolute top-[85%] right-16 ${
                        showColorPicker ? "animate-in fade-in zoom-in" : ""
                    }`}>
                    <OutsideClickHander
                        onOutsideClick={() => setShowColorPicker(false)}>
                        <TwitterPicker
                            triangle="hide"
                            onChangeComplete={(color) => {
                                if (selectedNode)
                                    updateNode({
                                        ...selectedNode.data,
                                        backgroundColor: color.hex,
                                    });
                            }}
                        />
                    </OutsideClickHander>
                </div>
            )}
        </>
    );
};

export default ColorPicker;
