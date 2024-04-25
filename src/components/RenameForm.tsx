import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useRenameMindmap from "../hooks/useRenameMindmap";
import useDashboardStore from "../store";

export const schema = z.object({
    name: z.string().min(5, { message: "name must ne at least 3 characters" }),
});

export type FormData = z.infer<typeof schema>;

const RenameForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });
    const renameMindmap = useRenameMindmap();
    const toggleForm = useDashboardStore((s) => s.toggleRenameForm);
    const mindmap = useDashboardStore((s) => s.currentMindmap);

    const onSubmit = async (data: FormData) => {
        renameMindmap.mutate({ ...mindmap, name: data.name });
        reset();
        toggleForm();
    };

    return (
        <>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-xl font-medium">Rename Mindmap</h1>
                <button
                    className="py-1 px-1 border border-3 rounded-md text-xs text-zinc-800 active:bg-red-700 transition duration-500 ease-in-out"
                    onClick={() => toggleForm()}>
                    close
                </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-6">
                    <label htmlFor="name" className="block my-2">
                        Enter new name
                    </label>
                    <input
                        {...register("name")}
                        type="text"
                        name="name"
                        id="name"
                        className="px-3 py-1 w-full border rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                    />

                    {errors.name && (
                        <p className="text-red-500 mt-1">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={!isValid}
                    className="py-2 px-4 mt-5 border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 disabled:bg-sky-300 transition duration-500 ease-in-out">
                    Rename
                </button>
            </form>
        </>
    );
};

export default RenameForm;
