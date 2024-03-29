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
                classNames="border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out"
                dataTooltipId="horizontal-button"
                onCLick={() => onLayout("LR")}
                tooltipContent="layout nodes horizontally">
                <BiSolidObjectsHorizontalLeft />
            </Button>
            <Button
                classNames="border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out"
                dataTooltipId="vertical-button"
                onCLick={() => onLayout("TB")}
                tooltipContent="layout nodes vertically">
                <BiSolidObjectsVerticalTop />
            </Button>
        </>
    );
};

export default LayoutButtons;
