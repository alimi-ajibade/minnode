import MindMap from "../entities/Mindmap";
import useMindmaps from "../hooks/useMindmaps";
import MindmapCard from "./MindmapCard";

interface Props {
    mindmaps: MindMap[];
}

const MindmapGrid = () => {
    const { data: mindmaps } = useMindmaps();

    return (
        <>
            {mindmaps?.map((mindmap) => (
                <MindmapCard mindmap={mindmap} key={mindmap._id.toString()} />
            ))}
        </>
    );
};

export default MindmapGrid;
