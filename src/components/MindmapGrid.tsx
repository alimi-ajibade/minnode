import useMindmaps from "../hooks/useMindmaps";
import MindmapCard from "./MindmapCard";

const MindmapGrid = () => {
    const { data: mindmaps } = useMindmaps();

    return (
        <>
            {mindmaps?.map((mindmap) => (
                <MindmapCard mindmap={mindmap} key={mindmap._id} />
            ))}
        </>
    );
};

export default MindmapGrid;
