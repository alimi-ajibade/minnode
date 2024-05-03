import useMindmaps from "../hooks/useMindmaps";
import MindmapCard from "./MindmapCard";
import MindmapCardSkeletont from "./MindmapCardSkeleton";

const MindmapGrid = () => {
    const { data: mindmaps, isLoading } = useMindmaps();
    const skeletons = [...Array(2).keys()];

    if (mindmaps?.length === 0) return <></>;

    if (isLoading)
        return (
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 xl:grid-cols-6 mt-5 py-5 px-5 bg-white rounded-md min-w-full">
                {skeletons.map((index) => (
                    <MindmapCardSkeletont key={index} />
                ))}
            </div>
        );

    return (
        <div
            className={`grid grid-cols-1 gap-5 lg:grid-cols-4 xl:grid-cols-6 flex-wrap mt-5 py-5 px-5 bg-white rounded-md min-w-full`}>
            {mindmaps?.map((mindmap) => (
                <MindmapCard mindmap={mindmap} key={mindmap._id} />
            ))}
        </div>
    );
};

export default MindmapGrid;
