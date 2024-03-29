import { BiAddToQueue } from "react-icons/bi";
import Button from "./Button";
import useRFStore from "./store";

const AddNodeButton = () => {
    const addNode = useRFStore((s) => s.addNode);
    return (
        <Button
            classNames="border border-3 rounded-md py-2 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out"
            dataTooltipId="add-button"
            onCLick={addNode}
            tooltipVariant="info"
            tooltipContent="add a new node">
            <BiAddToQueue />
        </Button>
    );
};

export default AddNodeButton;
