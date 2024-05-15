import MindMap from "../entities/Mindmap";
import useDeleteMindmap from "../hooks/useDeleteMindmap";
import useUIStore from "../store";

interface Props {
    mindmap: MindMap;
}

const Dropdowns = ({ mindmap }: Props) => {
    const deleteMindmap = useDeleteMindmap();
    const displayRenameForm = useUIStore((s) => s.setRenameFormModal);
    const toggleDropdown = useUIStore((s) => s.toggleDropdown);
    const setCurrentMindmap = useUIStore((s) => s.setCurrentMindmap);

    return (
        <div
            id={mindmap._id}
            className={`dropdowns hidden z-40 absolute bg-white shadow-md rounded-md top-56 -right-5 animate-in fade-in zoom-in`}>
            <ul className="w-20">
                <li className="cursor-pointer hover:bg-gray-200">
                    <button
                        onClick={() => {
                            toggleDropdown(mindmap._id);
                            displayRenameForm();
                            setCurrentMindmap(mindmap);
                        }}
                        className="p-3">
                        Rename
                    </button>
                </li>
                <li className="cursor-pointer hover:bg-gray-200">
                    <button
                        onClick={() => {
                            deleteMindmap.mutate(mindmap._id);
                            toggleDropdown(mindmap._id);
                        }}
                        className="p-3">
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Dropdowns;
