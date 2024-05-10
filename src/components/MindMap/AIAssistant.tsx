import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiSend } from "react-icons/bi";
import { z } from "zod";
import apiClient from "../../services/api-client";
import { toast } from "react-toastify";
import useDashboardStore from "../../store";
import { useShallow } from "zustand/react/shallow";

const schema = z.object({
    prompt: z
        .string()
        .min(3, { message: "topic must ne at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const AIAssistant = () => {
    // const [isLoading, setIsLoading] = useState(false);
    const [setShowAssistant, setFetchAIResponse] = useDashboardStore(
        useShallow((s) => [s.setShowAssitant, s.setFetchingAIResponse])
    );

    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        // setIsLoading(true);
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
                console.log({ data });
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
                setShowAssistant(false);
                setFetchAIResponse(false);
                // setIsLoading(false);
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
                        className="border px-3 py-1 focus:outline-none rounded-md"
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
