import useMindmaps from "../hooks/useMindmaps";
import MindmapCard from "./MindmapCard";

const MindmapGrid = () => {
    const { data: mindmaps } = useMindmaps();

    return (
        <div
            className={`grid grid-cols-1 gap-5 lg:grid-cols-4 xl:grid-cols-6 flex-wrap mt-5 py-5 px-5 ${
                mindmaps?.length !== 0 && "bg-white"
            } rounded-md min-w-full`}>
            {mindmaps?.map((mindmap) => (
                <MindmapCard mindmap={mindmap} key={mindmap._id} />
            ))}
        </div>
    );
};

export default MindmapGrid;
