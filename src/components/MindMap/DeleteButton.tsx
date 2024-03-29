import { MdDeleteForever } from "react-icons/md";
import Button from "./Button";
import useRFStore from "./store";

const DeleteButton = () => {
    const deleteNode = useRFStore((s) => s.deleteNode);
    const selectedNode = useRFStore((s) => s.selectedNode);
    const selectedEgde = useRFStore((s) => s.selectedEdge);
    const deleteEdge = useRFStore((s) => s.deleteEdge);
    return (
        <Button
            classNames="border border-3 rounded-md py-2 px-4 bg-red-500 hover:bg-red-600 active:bg-red-800 text-gray-50 transition duration-500 ease-in-out disabled:bg-red-300 transition duration-500 ease-in-out"
            dataTooltipId="delete-button"
            onCLick={() => {
                selectedNode ? deleteNode() : deleteEdge();
            }}
            disabled={selectedNode || selectedEgde ? false : true}
            tooltipVariant="error"
            tooltipContent="delete selected node or edge">
            <MdDeleteForever />
        </Button>
    );
};

export default DeleteButton;
