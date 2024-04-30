import { BiAddToQueue } from "react-icons/bi";
import Button from "./Button";
import useRFStore from "./store";

const AddNodeButton = () => {
    const addNode = useRFStore((s) => s.addNode);
    return (
        <Button
            dataTooltipId="add-button"
            onCLick={addNode}
            tooltipVariant="info"
            tooltipContent="add a new node">
            <BiAddToQueue />
        </Button>
    );
};

export default AddNodeButton;
