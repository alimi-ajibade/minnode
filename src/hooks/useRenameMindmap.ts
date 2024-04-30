import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import MindMap from "../entities/Mindmap";
import mindmapService from "../services/mindmapService";

interface RenameMindmapContext {
    previousMindmaps: MindMap[];
}

const useRenameMindmap = () => {
    const queryClient = useQueryClient();

    return useMutation<MindMap, Error, MindMap, RenameMindmapContext>({
        mutationFn: (modifiedMindmap) =>
            mindmapService.renameMindmap(modifiedMindmap),

        onMutate: (modifiedMindmap) => {
            toast.dismiss();
            toast("saving");

            const previousMindmaps =
                queryClient.getQueryData<MindMap[]>(["mindmaps"]) || [];

            queryClient.setQueryData<MindMap[]>(["mindmaps"], (mindmaps) => {
                return mindmaps?.map((m) =>
                    m._id === modifiedMindmap._id ? { ...modifiedMindmap } : m
                );
            });

            return { previousMindmaps };
        },

        onSuccess: (savedMindmap, modifiedMindmap) => {
            queryClient.setQueryData<MindMap[]>(["mindmaps"], (mindmaps) => {
                return mindmaps?.map((m) =>
                    m._id === modifiedMindmap._id ? savedMindmap : m
                );
            });

            toast.dismiss();
            toast("saved", { type: "success" });
        },

        onError: (error, deletedMindmap, context) => {
            if (!context) return;

            queryClient.setQueryData(["mindmaps"], context?.previousMindmaps);

            toast.dismiss();
            toast("Something went wrong...", { type: "error" });
        },
    });
};

export default useRenameMindmap;
