import { Handle, NodeProps, Position } from "reactflow";

interface NodeData {
    label: string;
    backgroundColor: string;
}

function CustomNode({ id, data }: NodeProps<NodeData>) {
    return (
        <>
            <input
                defaultValue={data.label}
                style={{
                    backgroundColor: data.backgroundColor,
                    outlineColor: data.backgroundColor,
                }}
                className="p-2 border border-1 rounded text-center focus:outline outilne-2"
            />

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </>
    );
}

export default CustomNode;
