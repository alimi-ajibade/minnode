import { Tooltip } from "react-tooltip";
import { MdDeleteForever } from "react-icons/md";
import useRFStore from "./store";

const DeleteButton = () => {
    const deleteNode = useRFStore((s) => s.deleteNode);
    const selectedNode = useRFStore((s) => s.selectedNode);
    const selectedEgde = useRFStore((s) => s.selectedEdge);
    const deleteEdge = useRFStore((s) => s.deleteEdge);
    return (
        <div className="m-3">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-red-500 hover:bg-red-600 active:bg-red-800 text-gray-50 transition duration-500 ease-in-out disabled:bg-red-300 transition duration-500 ease-in-out`}
                data-tooltip-id="delete-button"
                onClick={() => {
                    selectedNode ? deleteNode() : deleteEdge();
                }}
                disabled={selectedNode || selectedEgde ? false : true}>
                <MdDeleteForever />
            </button>
            <Tooltip
                id="delete-button"
                place="bottom"
                variant="error"
                content="add a new node"
            />
        </div>
    );
};

export default DeleteButton;
