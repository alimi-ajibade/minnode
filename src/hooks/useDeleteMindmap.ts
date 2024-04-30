import { useMutation, useQueryClient } from "@tanstack/react-query";
import MindMap from "../entities/Mindmap";
import mindmapService from "../services/mindmapService";
import { toast } from "react-toastify";

interface DeleteMindmapContext {
    previousMindmaps: MindMap[];
}

const useDeleteMindmap = () => {
    const queryClient = useQueryClient();

    return useMutation<MindMap, Error, string, DeleteMindmapContext>({
        mutationFn: (id) => mindmapService.deleteMindmap(id),

        onMutate: (id) => {
            toast.dismiss();
            toast("deleting");

            const previousMindmaps =
                queryClient.getQueryData<MindMap[]>(["mindmaps"]) || [];

            queryClient.setQueryData<MindMap[]>(["mindmaps"], (mindmaps) => {
                return mindmaps?.filter((m) => m._id !== id);
            });

            return { previousMindmaps };
        },

        onSuccess: () => {
            toast.dismiss();
            toast("deleted", { type: "success" });
        },

        onError: (error, deletedMindmap, context) => {
            if (!context) return;

            queryClient.setQueryData(["mindmaps"], context?.previousMindmaps);

            toast.dismiss();
            toast("Something went wrong...", { type: "error" });
        },
    });
};

export default useDeleteMindmap;
