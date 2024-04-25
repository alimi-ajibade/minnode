import MindMap from "../entities/Mindmap";
import useDeleteMindmap from "../hooks/useDeleteMindmap";
import useDashboardStore from "../store";

interface Props {
    mindmap: MindMap;
}

const Dropdowns = ({ mindmap }: Props) => {
    const deleteMindmap = useDeleteMindmap();
    const toggleForm = useDashboardStore((s) => s.toggleRenameForm);
    const toggleDropdown = useDashboardStore((s) => s.toggleDropdown);
    const setCurrentMindmap = useDashboardStore((s) => s.setCurrentMindmap);

    return (
        <div
            id={mindmap._id}
            className={`dropdowns hidden z-10 absolute bg-white shadow-md rounded-md top-56 left-40`}>
            <ul className="w-20">
                <li className="cursor-pointer p-3 hover:bg-gray-200">
                    <button
                        onClick={() => {
                            toggleDropdown(mindmap._id);
                            toggleForm();
                            setCurrentMindmap(mindmap);
                        }}>
                        Rename
                    </button>
                </li>
                <li className="cursor-pointer p-3 hover:bg-gray-200">
                    <button
                        onClick={() => {
                            deleteMindmap.mutate(mindmap._id);
                            toggleDropdown(mindmap._id);
                        }}>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Dropdowns;
