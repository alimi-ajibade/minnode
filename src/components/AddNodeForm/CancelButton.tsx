import useFormStore from "./store";

const CancelButton = () => {
    const { setFormVisibility } = useFormStore();
    return (
        <button
            className="py-1 px-1 border border-3 rounded-md text-xs text-zinc-800 hover:bg-red-400 active:bg-red-700 transition duration-500 ease-in-out"
            onClick={setFormVisibility}>
            close
        </button>
    );
};

export default CancelButton;
