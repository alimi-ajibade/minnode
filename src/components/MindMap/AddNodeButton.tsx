import { BiAddToQueue } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import useRFStore from "./store";

const AddNodeButton = () => {
    const addNode = useRFStore((s) => s.addNode);
    return (
        <div className="m-3">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out`}
                data-tooltip-id="add-button"
                onClick={() => {
                    addNode();
                }}>
                <BiAddToQueue />
            </button>
            <Tooltip
                id="add-button"
                place="bottom"
                variant="info"
                content="add a new node"
            />
        </div>
    );
};

export default AddNodeButton;
