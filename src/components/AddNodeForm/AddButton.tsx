import useFormStore from "./store";

const AddButton = () => {
    const { isVisible, setFormVisibility } = useFormStore();
    return (
        <div className="fixed bottom-0 right-0 p-6">
            <button
                className={`${
                    isVisible && "hidden"
                } border border-3 rounded-md py-2 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out`}
                onClick={() => {
                    setFormVisibility();
                }}>
                Add
            </button>
        </div>
    );
};

export default AddButton;
