import mindmapTemplates from "../entities/MindmapTemplates";
import MindmapTemplateCard from "./MindmapTemplateCard";

const MindmapTemplates = () => {
    return Object.keys(mindmapTemplates).map((key) => {
        const template = mindmapTemplates[key];
        return <MindmapTemplateCard key={key} template={template} />;
    });
};

export default MindmapTemplates;
