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
