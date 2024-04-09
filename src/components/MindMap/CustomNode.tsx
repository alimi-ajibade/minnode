import { useEffect, useRef } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import useRFStore, { NodeData } from "./store";

function CustomNode({ id, data }: NodeProps<NodeData>) {
    const labelRef = useRef<HTMLInputElement>(null);

    const { nodes, updateNodeLabel, updateNode, setSelectedNode } =
        useRFStore();

    useEffect(() => {
        const node = nodes.find((node) => node.id === id);

        if (labelRef.current !== null && node?.data.label) {
            labelRef.current.value = node?.data.label;
        }
    }, [nodes, updateNode]);

    return (
        <>
            <div className="relative">
                <input
                    ref={labelRef}
                    defaultValue={data.label}
                    style={{
                        backgroundColor: data.backgroundColor,
                        outlineColor: data.backgroundColor,
                    }}
                    className="p-2 border rounded text-center focus:outline outilne-2"
                    onChange={(event) => {
                        updateNodeLabel(event.target.value);
                        setSelectedNode(nodes);
                    }}
                />
                <Handle type="target" position={Position.Top} id="targetT" />
                <Handle type="source" position={Position.Bottom} id="sourceB" />
                <Handle type="source" position={Position.Right} id="sourceR" />
                <Handle type="target" position={Position.Left} id="targetL" />
            </div>
        </>
    );
}

export default CustomNode;
