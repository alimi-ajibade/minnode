import useRFStore from "./store";
import { TwitterPicker } from "react-color";
import { LuPaintbrush2 } from "react-icons/lu";
import Button from "./Button";

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
                tooltipContent="change color">
                <LuPaintbrush2 />
            </Button>

            <div
                className={`${
                    showColorPicker ? "block" : "hidden"
                } absolute top-52 right-20`}>
                <TwitterPicker
                    triangle="hide"
                    onChangeComplete={(color) => {
                        if (selectedNode)
                            updateNode({
                                ...selectedNode.data,
                                backgroundColor: color.hex,
                            });
                        setShowColorPicker(false);
                    }}
                />
            </div>
        </>
    );
};

export default ColorPicker;
