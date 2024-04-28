import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import MindMap from "../entities/Mindmap";

const useMindmaps = () =>
    useQuery<MindMap[], Error>({
        queryKey: ["mindmaps"],
        queryFn: () =>
            apiClient({
                url: "/mindmap",
                method: "get",
                headers: {
                    "x-auth-token": localStorage.getItem("access_token"),
                },
            }).then((resp) => resp.data),
        refetchOnWindowFocus: "always",
    });

export default useMindmaps;
