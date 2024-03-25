import CancelButton from "./CancelButton";
import ColorPicker from "./ColorPicker";
import FormContainer from "./FormContainer";

const AddNodeForm = () => {
    return (
        <FormContainer>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-lg font-medium">Add Node</h1>
                <CancelButton />
            </div>
            <form>
                <label htmlFor="label" className="block my-2">
                    Label
                </label>
                <input
                    type="text"
                    name="label"
                    id="label"
                    className="px-3 py-1 w-full border border-2 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                />

                <label htmlFor="note" className="block my-2">
                    Note
                </label>
                <textarea
                    name="note"
                    id="note"
                    rows={5}
                    className="px-3 py-1 w-full h-194 resize-none border border-2 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"></textarea>

                <ColorPicker />

                <button
                    type="submit"
                    className="py-2 px-4 mt-5 border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out">
                    Create
                </button>
            </form>
        </FormContainer>
    );
};

export default AddNodeForm;
