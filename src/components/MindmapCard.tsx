import { useState } from "react";
import MindMap from "../entities/Mindmap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { nanoid } from "nanoid";
import { TbDotsVertical } from "react-icons/tb";
import Dropdowns from "./Dropdowns";

interface Props {
    mindmap: MindMap;
}

const MindmapCard = ({ mindmap }: Props) => {
    const navigate = useNavigate();
    const [dropdownVisibility, setDropdownVisibility] = useState(false);

    return (
        <div
            className="relative flex flex-col columns-1 rows-2 min-w-52 max-w-52 h-64 rounded-md bg-gray-100"
            key={mindmap._id.toString()}>
            <div
                onClick={() => navigate(`/app/mindmap/${mindmap._id}`)}
                className="cursor-pointer absolute flex flex-col columns-1 justify-center items-center min-h-48 min-w-full rounded-md bg-gray-700 bg-opacity-70 text-white opacity-0 hover:opacity-100 transistion ease-in-out duration-300">
                <p>View</p>
                <div>
                    <FaArrowRight />
                </div>
            </div>

            <div
                key={nanoid(5)}
                className="bg-pink-100 basis-48 overflow-hidden rounded-md">
                <img src="/images/fileImage.webp" className="object-cover" />
            </div>

            <div key={nanoid(5)} className="p-2 flex flex-row justify-between">
                <p className="text-sm">{mindmap.name}</p>

                <div
                    className="opacity-30 cursor-pointer w-4"
                    onClick={() => setDropdownVisibility(!dropdownVisibility)}>
                    <TbDotsVertical />
                </div>
            </div>

            {dropdownVisibility && <Dropdowns mindmap={mindmap} />}
        </div>
    );
};

export default MindmapCard;
