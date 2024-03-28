import useFormStore from "./store";

const AddButton = () => {
    const { setFormVisibility, setIsUpdateForm } = useFormStore();
    return (
        <div className="fixed bottom-0 right-0 p-6 z-10">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 transition duration-500 ease-in-out`}
                onClick={() => {
                    setFormVisibility();
                    setIsUpdateForm(false);
                }}>
                Add
            </button>
        </div>
    );
};

export default AddButton;
