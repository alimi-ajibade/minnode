import { MdDeleteForever } from "react-icons/md";
import Button from "./Button";
import useRFStore from "./store";

const DeleteButton = () => {
    const deleteNode = useRFStore((s) => s.deleteNode);
    const selectedNodes = useRFStore((s) => s.selectedNodes);
    const selectedEgde = useRFStore((s) => s.selectedEdges);
    const deleteEdge = useRFStore((s) => s.deleteEdge);
    return (
        <Button
            dataTooltipId="delete-button"
            onCLick={() => {
                selectedNodes.length > 0 ? deleteNode() : deleteEdge();
            }}
            disabled={selectedNodes || selectedEgde ? false : true}
            tooltipContent="delete selected node or edge">
            <MdDeleteForever />
        </Button>
    );
};

export default DeleteButton;
