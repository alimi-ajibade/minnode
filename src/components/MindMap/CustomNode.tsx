import { useEffect, useRef } from "react";
import _ from "lodash";
import { Handle, NodeProps, Position } from "reactflow";
import useRFStore, { NodeData } from "./store";
import { useShallow } from "zustand/react/shallow";

function CustomNode({ id, data }: NodeProps<NodeData>) {
    const labelRef = useRef<HTMLInputElement>(null);

    const [
        nodes,
        updateNodeLabel,
        updateNode,
        setSelectedNodes,
        selectedNodes,
    ] = useRFStore(
        useShallow((s) => [
            s.nodes,
            s.updateNodeLabel,
            s.updateNodeData,
            s.setSelectedNodes,
            s.selectedNodes,
        ])
    );

    useEffect(() => {
        const node = nodes.find((node) => node.id === id);

        if (labelRef.current !== null && node?.data.label) {
            labelRef.current.value = node?.data.label;
        }
    }, [nodes, updateNode]);

    return (
        <>
            <div
                className={
                    _.find(selectedNodes, (n) => id === n.id)
                        ? `outline outline-[#66A9FF] outline-2 outline-offset-1`
                        : ""
                }>
                <input
                    ref={labelRef}
                    defaultValue={data.label}
                    style={{
                        backgroundColor: data.backgroundColor,
                    }}
                    className="p-2 text-center border focus:outline-none"
                    onChange={(event) => {
                        updateNodeLabel(event.target.value);
                        setSelectedNodes(nodes);
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
