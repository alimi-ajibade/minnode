import MindMap from "../entities/Mindmap";
import useDeleteMindmap from "../hooks/useDeleteMindmap";

interface Props {
    mindmap: MindMap;
}

const Dropdowns = ({ mindmap }: Props) => {
    const deleteMindmap = useDeleteMindmap();

    return (
        <div
            className={`z-10 absolute bg-white shadow-md rounded-md top-56 left-40`}>
            <ul className="w-20">
                <li className="cursor-pointer p-3 hover:bg-gray-200">Rename</li>
                <li className="cursor-pointer p-3 hover:bg-gray-200">
                    <button
                        onClick={() =>
                            deleteMindmap.mutate(mindmap._id.toString())
                        }>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Dropdowns;
