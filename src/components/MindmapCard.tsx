import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import Dropdowns from "./Dropdowns";
import useUIStore from "../store";
import MindMap from "../entities/Mindmap";
import getTimeDiff from "../utils/getTimeDifference";
import CardFlow from "./CardFlow";

interface Props {
    mindmap: MindMap;
}

const MindmapCard = ({ mindmap }: Props) => {
    const navigate = useNavigate();
    const toggleDropdown = useUIStore((s) => s.toggleDropdown);
    const setCurrentMindmap = useUIStore((s) => s.setCurrentMindmap);

    return (
        <div
            className="relative flex flex-col columns-1 rows-2 h-64 rounded-md bg-gray-100"
            key={mindmap._id}>
            <div
                onClick={() => {
                    setCurrentMindmap(mindmap);
                    navigate(`/app/mindmap/${mindmap.fileId}`);
                }}
                className="cursor-pointer z-30 absolute flex flex-col columns-1 justify-center items-center min-h-48 min-w-full rounded-md bg-gray-700 bg-opacity-70 text-white opacity-0 hover:opacity-100 transistion ease-in-out duration-300">
                <p>View</p>
                <div>
                    <FaArrowRight />
                </div>
            </div>

            <div className="bg-pink-100 basis-48 overflow-hidden rounded-md">
                <CardFlow mindmap={mindmap} key={mindmap._id} />
            </div>

            <div className="p-2">
                <div className="flex flex-row justify-between">
                    <p className="text-sm">{mindmap.filename}</p>
                    <div
                        className="opacity-30 cursor-pointer w-4"
                        onClick={() => toggleDropdown(mindmap._id)}>
                        <TbDotsVertical />
                    </div>
                </div>
                <div>
                    <p className="mt-1 text-xs text-gray-500">
                        {`last modified: ${getTimeDiff(mindmap.last_modified)}`}
                    </p>
                </div>
                <Dropdowns mindmap={mindmap} />
            </div>
        </div>
    );
};

export default MindmapCard;
