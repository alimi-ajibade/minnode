import { useRef } from "react";
import MindMap from "../entities/Mindmap";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { TbDotsVertical } from "react-icons/tb";
import Dropdowns from "./Dropdowns";

interface Props {
    mindmap: MindMap;
}

const MindmapCard = ({ mindmap }: Props) => {
    const navigate = useNavigate();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        const dropdowns = document.getElementsByClassName("dropdowns");

        if (dropdowns) {
            Array.from(dropdowns).forEach((dropdown) => {
                if (!dropdown.classList.contains("hidden"))
                    dropdown.classList.add("hidden");
            });
        }

        if (dropdownRef.current) {
            const dropdown = dropdownRef.current;
            dropdown.classList.toggle("hidden");
        }
    };

    return (
        <div
            className="relative flex flex-col columns-1 rows-2 min-w-52 max-w-52 h-64 rounded-md bg-gray-100"
            key={mindmap._id}>
            <div
                onClick={() => navigate(`/app/mindmap/${mindmap._id}`)}
                className="cursor-pointer absolute flex flex-col columns-1 justify-center items-center min-h-48 min-w-full rounded-md bg-gray-700 bg-opacity-70 text-white opacity-0 hover:opacity-100 transistion ease-in-out duration-300">
                <p>View</p>
                <div>
                    <FaArrowRight />
                </div>
            </div>

            <div className="bg-pink-100 basis-48 overflow-hidden rounded-md">
                <img src="/images/fileImage.webp" className="object-cover" />
            </div>

            <div className="p-2 flex flex-row justify-between">
                <p className="text-sm">{mindmap.name}</p>

                <div
                    className="opacity-30 cursor-pointer w-4"
                    onClick={() => toggleDropdown()}>
                    <TbDotsVertical />
                </div>
            </div>

            <Dropdowns
                mindmap={mindmap}
                toggleDropdown={toggleDropdown}
                dropdownRef={dropdownRef}
            />
        </div>
    );
};

export default MindmapCard;
