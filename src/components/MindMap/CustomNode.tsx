import { Handle, NodeProps, Position } from "reactflow";
import useFormStore from "../AddNodeForm/store";
import useRFStore, { NodeData } from "./store";
import { useEffect, useRef } from "react";

function CustomNode({ id, data }: NodeProps<NodeData>) {
    const { setFormVisibility, setIsUpdateForm } = useFormStore();
    const {
        nodes,
        updateNodeLabel,
        updateNodeUsingForm: updateNode,
        setSelectedNode,
    } = useRFStore();
    const labelRef = useRef<HTMLInputElement>(null);

    const handleDoubleClick = () => {
        setFormVisibility();
        setIsUpdateForm(true);
    };

    useEffect(() => {
        const node = nodes.find((node) => node.id === id);

        if (labelRef.current !== null && node?.data.label) {
            labelRef.current.value = node?.data.label;
        }
    }, [nodes, updateNode]);

    return (
        <>
            <input
                ref={labelRef}
                defaultValue={data.label}
                style={{
                    backgroundColor: data.backgroundColor,
                    outlineColor: data.backgroundColor,
                }}
                className="p-2 border border-1 rounded text-center focus:outline outilne-2"
                onDoubleClick={handleDoubleClick}
                onChange={(event) => {
                    updateNodeLabel(event.target.value);
                    setSelectedNode(nodes);
                }}
            />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}

export default CustomNode;
