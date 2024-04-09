import { GithubPicker } from "react-color";
import useRFStore from "./store";

const ColorPicker = () => {
    const selectedNode = useRFStore((s) => s.selectedNode);
    const updateNode = useRFStore((s) => s.updateNode);

    return (
        <div className="w-[fit-content] m-auto">
            <GithubPicker
                triangle="hide"
                width="2.3rem"
                colors={[
                    "#eeeeee",
                    "#FF7F4D",
                    "#FCCB00",
                    "#00CC33",
                    "#33A3BB",
                    "#66A9FF",
                    "#3399FF",
                ]}
                onChangeComplete={(color) => {
                    if (selectedNode)
                        updateNode({
                            ...selectedNode.data,
                            backgroundColor: color.hex,
                        });
                }}
            />
        </div>
    );
};

export default ColorPicker;
