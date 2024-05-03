import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import useDashboardStore from "../store";
import { PartialMindmap } from "../entities/Mindmap";

interface Props {
    template: { image: string; mindmap: PartialMindmap };
}

const MindmapTemplateCard = ({ template }: Props) => {
    const navigate = useNavigate();
    const setCurrentMindmap = useDashboardStore((s) => s.setCurrentMindmap);

    return (
        <div className="hidden lg:flex flex-col">
            <button
                className="bg-gray-100 max-w-48 min-w-48 min-h-36 max-h-36 overflow-hidden rounded-md hover:border border-blue-700 transition duration-500"
                onClick={() => {
                    const id = nanoid(10);
                    setCurrentMindmap({
                        ...template.mindmap,
                        fileId: id,
                    });
                    navigate(`/app/mindmap/${id}`);
                }}>
                <img src={template.image} className="object-cover" />
            </button>
            <p className="mt-1 text-sm">{template.mindmap.filename}</p>
        </div>
    );
};

export default MindmapTemplateCard;
