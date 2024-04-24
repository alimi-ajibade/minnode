import MindMap from "../../entities/Mindmap";

interface Props {
    item: MindMap;
    toggle: (id: string) => void;
    deleteFn: (id: string) => void;
}

const Dropdowns = ({ item, toggle, deleteFn }: Props) => {
    return (
        <div
            className={`z-10 absolute bg-white shadow-md rounded-md top-56 left-40`}>
            <ul className="w-20">
                <li
                    className="cursor-pointer p-3 hover:bg-gray-200"
                    // onClick={() => toggle(item._id.toString())}
                >
                    Rename
                </li>
                <li
                    className="cursor-pointer p-3 hover:bg-gray-200"
                    onClick={() => {
                        deleteFn(item._id.toString());
                        // toggle(item._id.toString());
                    }}>
                    <button> Delete </button>
                </li>
            </ul>
        </div>
    );
};

export default Dropdowns;
