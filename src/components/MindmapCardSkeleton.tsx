const MindmapCardSkeleton = () => {
    return (
        <div className="relative flex flex-col columns-1 rows-2 h-64 rounded-md bg-gray-300 animate-pulse">
            <div className="min-h-48 min-w-full rounded-md bg-gray-200"></div>
            <div className="p-2">
                <div className="w-1/2 h-3 rounded bg-gray-200"></div>
                <div className="w-[80%] h-3 mt-2 rounded bg-gray-200"></div>
            </div>
        </div>
    );
};

export default MindmapCardSkeleton;
