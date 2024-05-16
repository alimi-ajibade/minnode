import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import { z } from "zod";
import apiClient from "../../services/api-client";
import { toast } from "react-toastify";
import useUIStore from "../../store";
import { useShallow } from "zustand/react/shallow";
import { useReactFlow } from "reactflow";
import alignNodes from "../../utils/alignGeneratedMindmap";

const schema = z.object({
    prompt: z
        .string()
        .min(3, { message: "topic must ne at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const AIAssistant = () => {
    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });
    const [setShowAssistant, setFetchAIResponse] = useUIStore(
        useShallow((s) => [s.setShowAssitant, s.setFetchingAIResponse])
    );
    const {
        addNodes,
        addEdges,
        setNodes,
        setEdges,
        getNodes,
        getEdges,
        fitView,
    } = useReactFlow();

    const onSubmit = async (data: FormData) => {
        setShowAssistant(false);
        setFetchAIResponse(true);

        toast("Formulating your response...", {
            toastId: "ai",
            autoClose: false,
            containerId: "mindmap",
        });

        apiClient({
            url: "/mindmap-ai",
            method: "post",
            headers: {
                "x-auth-token": sessionStorage.getItem("access_token"),
            },
            data,
        })
            .then(({ data }) => {
                addNodes(data.nodes);
                addEdges(data.edges);

                const { nodes, edges } = alignNodes(data.nodes, data.edges);
                setNodes([...getNodes(), ...nodes]);
                setEdges([...getEdges(), ...edges]);

                window.requestAnimationFrame(() => {
                    fitView();
                });

                if (toast.isActive("ai")) toast.dismiss("ai");
            })
            .catch((err) => {
                console.log(err);

                if (toast.isActive("ai")) toast.dismiss("ai");
                toast(
                    "Due to heavy request assistant is temporialy on available. Try again in a few minutes",
                    { containerId: "mindmap" }
                );
            })
            .finally(() => {
                setFetchAIResponse(false);
            });
    };

    return (
        <div className="absolute -bottom-20 right-10 p-2 bg-white rounded-md animate-in fade-in zoom-in">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <input
                        {...register("prompt")}
                        type="text"
                        placeholder="Topic"
                        id="prompt"
                        className="border px-3 py-1 w-64 focus:outline-none rounded-md"
                    />

                    <button
                        type="submit"
                        disabled={!isValid}
                        className="text-gray-400 disabled:text-gray-200 hover:text-blue-700 hover:bg-blue-200 transition duration-300 ease-in-out">
                        <BiSend className="size-7" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AIAssistant;
