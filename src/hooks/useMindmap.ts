import { useQuery } from "@tanstack/react-query";
import mindmapService from "../services/mindmapService";
import MindMap from "../entities/Mindmap";

const useMindmap = (id: string) =>
    useQuery<MindMap, Error>({
        queryKey: ["mindmap", id],
        queryFn: () => {
            return mindmapService.getMindmap(id);
        },
        refetchOnWindowFocus: "always",
    });

export default useMindmap;
