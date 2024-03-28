import useRFStore from "./store";
import { BiAddToQueue } from "react-icons/bi";

const AddNodeButton = () => {
    // const { setFormVisibility, setIsUpdateForm } = useFormStore();
    const addNode = useRFStore((s) => s.addNode);
    return (
        <div className="m-3 z-10">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out`}
                onClick={() => {
                    // setFormVisibility();
                    // setIsUpdateForm(false);
                    addNode();
                }}>
                <BiAddToQueue />
            </button>
        </div>
    );
};

export default AddNodeButton;
