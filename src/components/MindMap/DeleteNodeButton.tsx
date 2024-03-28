import useRFStore from "./store";

const DeleteNodeButton = () => {
    const deleteNode = useRFStore((s) => s.deleteNode);
    return (
        <div className="fixed bottom-0 right-0 m-4 z-10">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-red-500 hover:bg-red-600 active:bg-red-800 text-gray-50 transition duration-500 ease-in-out`}
                onClick={() => {
                    deleteNode();
                }}>
                Delete
            </button>
        </div>
    );
};

export default DeleteNodeButton;
