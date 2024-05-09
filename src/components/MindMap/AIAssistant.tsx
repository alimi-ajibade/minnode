import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BiSearch, BiSend } from "react-icons/bi";
import { z } from "zod";
import apiClient from "../../services/api-client";
import { useState } from "react";

const schema = z.object({
    prompt: z
        .string()
        .min(3, { message: "topic must ne at least 3 characters" }),
});

type FormData = z.infer<typeof schema>;

const AIAssistant = () => {
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { isValid },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);

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
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="absolute -bottom-20 right-2 p-2 bg-white animate-in fade-in zoom-in">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-row gap-2 justify-center items-center">
                    <BiSearch className="size-7 text-gray-400" />

                    <input
                        {...register("prompt")}
                        type="text"
                        placeholder="Topic"
                        id="prompt"
                        className="border px-3 py-1 focus:outline-none"
                    />

                    <button
                        type="submit"
                        disabled={!isValid}
                        className="text-gray-400 disabled:text-gray-200">
                        <BiSend className="size-7" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AIAssistant;
