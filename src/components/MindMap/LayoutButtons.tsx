import {
    BiSolidObjectsHorizontalLeft,
    BiSolidObjectsVerticalTop,
} from "react-icons/bi";
import Button from "./Button";
import useLayoutNodes from "../../hooks/useLayoutNodes";

const LayoutButtons = () => {
    const onLayout = useLayoutNodes();
    return (
        <>
            <Button
                dataTooltipId="horizontal-button"
                onCLick={() => onLayout("LR")}
                tooltipContent="layout nodes horizontally">
                <BiSolidObjectsHorizontalLeft />
            </Button>
            <Button
                dataTooltipId="vertical-button"
                onCLick={() => onLayout("TB")}
                tooltipContent="layout nodes vertically">
                <BiSolidObjectsVerticalTop />
            </Button>
        </>
    );
};

export default LayoutButtons;
