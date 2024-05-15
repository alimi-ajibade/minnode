import { RiFunctionAddLine } from "react-icons/ri";
import Button from "./Button";
import useRFStore from "./store";

const AddNodeButton = () => {
    const addNode = useRFStore((s) => s.addNode);
    return (
        <Button
            dataTooltipId="add-button"
            onClick={addNode}
            tooltipContent="add a new node">
            <RiFunctionAddLine />
        </Button>
    );
};

export default AddNodeButton;
