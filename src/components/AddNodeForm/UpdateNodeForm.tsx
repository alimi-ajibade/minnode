import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./AddNodeForm";
import { FormData } from "./AddNodeForm";
import CancelButton from "./CancelButton";
import { useState } from "react";
import useFormStore from "./store";
import useRFStore from "../MindMap/store";
import ColorPicker from "./ColorPicker";

const UpdateNodeForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const {
        nodes,
        selectedNode,
        updateNodeUsingForm: updateNode,
        setSelectedNode,
    } = useRFStore();

    const [color, setColor] = useState(
        selectedNode.data?.backgroundColor
            ? selectedNode.data.backgroundColor
            : "#ABB8C3"
    );

    const { setFormVisibility, setIsUpdateForm } = useFormStore();

    const onSubmit = (data: FormData) => {
        const { label, note } = data;
        updateNode({ label: label, note, backgroundColor: color });
        setSelectedNode(nodes);
        reset();
        setFormVisibility();
        setIsUpdateForm(false);
    };

    return (
        <>
            <div className="flex flex-row justify-between w-full">
                <h1 className="text-lg font-medium">Update Node</h1>
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
                        defaultValue={
                            selectedNode.data?.label
                                ? selectedNode.data.label
                                : ""
                        }
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
                        defaultValue={
                            selectedNode.data?.note
                                ? selectedNode.data.note
                                : ""
                        }
                        className="px-3 py-1 w-full h-194 resize-none border border-2 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"></textarea>
                </div>

                <ColorPicker
                    background={color}
                    setBackground={(color) => setColor(color.hex)}
                />

                <button
                    type="submit"
                    disabled={!isValid}
                    className="py-2 px-4 mt-5 border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 disabled:bg-sky-300 transition duration-500 ease-in-out">
                    Update
                </button>
            </form>
        </>
    );
};

export default UpdateNodeForm;
