import useRFStore from "./store";
import { MdDeleteForever } from "react-icons/md";

const DeleteButton = () => {
    const deleteNode = useRFStore((s) => s.deleteNode);
    const selectedNode = useRFStore((s) => s.selectedNode);
    const selectedEgde = useRFStore((s) => s.selectedEdge);
    const deleteEdge = useRFStore((s) => s.deleteEdge);
    return (
        <div className="m-3 z-10">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-red-500 hover:bg-red-600 active:bg-red-800 text-gray-50 transition duration-500 ease-in-out disabled:bg-red-300 transition duration-500 ease-in-out`}
                onClick={() => {
                    selectedNode ? deleteNode() : deleteEdge();
                }}
                disabled={selectedNode || selectedEgde ? false : true}>
                <MdDeleteForever />
            </button>
        </div>
    );
};

export default DeleteButton;
