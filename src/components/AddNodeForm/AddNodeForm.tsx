import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CancelButton from "./CancelButton";
import ColorPicker from "./ColorPicker";
import { useState } from "react";
import useRFStore from "../MindMap/store";
import useFormStore from "./store";

export const schema = z.object({
    label: z
        .string()
        .min(2, { message: "Label must be at least 3 characters" }),
    note: z.string().optional(),
});

export type FormData = z.infer<typeof schema>;

const AddNodeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const [color, setColor] = useState("#ABB8C3");

    const { setFormVisibility } = useFormStore();

    const addNodeUsingForm = useRFStore((s) => s.addNodeUsingForm);

    const onSubmit = (data: FormData) => {
        const { label, note } = data;
        addNodeUsingForm(label, note, color);
        reset();
        setFormVisibility();
    };

    return (
        <>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-lg font-medium">Add Node</h1>
                <CancelButton />
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="label" className="block my-2">
                        Label
                    </label>
                    <input
                        {...register("label")}
                        type="text"
                        name="label"
                        id="label"
                        className="px-3 py-1 w-full border border-2 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                    />

                    {errors.label && (
                        <p className="text-red-500 mt-1">
                            {errors.label.message}
                        </p>
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="note" className="block my-2">
                        Note
                    </label>
                    <textarea
                        {...register("note")}
                        name="note"
                        id="note"
                        rows={5}
                        className="px-3 py-1 w-full h-194 resize-none border rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"></textarea>
                </div>

                <ColorPicker
                    background={color}
                    setBackground={(color) => setColor(color.hex)}
                />

                <button
                    type="submit"
                    disabled={!isValid}
                    className="py-2 px-4 mt-5 border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 disabled:bg-sky-300 transition duration-500 ease-in-out">
                    Add
                </button>
            </form>
        </>
    );
};

export default AddNodeForm;
