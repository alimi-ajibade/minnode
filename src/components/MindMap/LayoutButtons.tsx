import { TbHierarchy3 } from "react-icons/tb";
import Button from "./Button";
import useLayoutNodes from "../../hooks/useLayoutNodes";

const LayoutButtons = () => {
    const onLayout = useLayoutNodes();
    return (
        <>
            <Button
                dataTooltipId="horizontal-button"
                onClick={() => onLayout("LR")}
                tooltipContent="layout nodes horizontally">
                <TbHierarchy3 className="  -rotate-90" />
            </Button>
            <Button
                dataTooltipId="vertical-button"
                onClick={() => onLayout("TB")}
                tooltipContent="layout nodes vertically">
                <TbHierarchy3 />
            </Button>
        </>
    );
};

export default LayoutButtons;
