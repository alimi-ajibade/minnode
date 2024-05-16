import { useRef, useLayoutEffect } from "react";
import _ from "lodash";
import { Handle, NodeProps, Position } from "reactflow";
import useRFStore from "./store";
import { NodeData } from "../../entities/NodeData";
import { useShallow } from "zustand/react/shallow";
import useUIStore from "../../store";

function CustomNode({ id, data, selected }: NodeProps<NodeData>) {
    const labelRef = useRef<HTMLInputElement>(null);
    const [nodes, dragMode, updateNodeLabel, updateNode, setSelectedNodes] =
        useRFStore(
            useShallow((s) => [
                s.nodes,
                s.dragMode,
                s.updateNodeLabel,
                s.updateNodeData,
                s.setSelectedNodes,
            ])
        );
    const showNodeHandles = useUIStore((s) => s.showNodeHandles);

    useLayoutEffect(() => {
        const node = nodes.find((node) => node.id === id);

        if (labelRef.current && node?.data.label) {
            labelRef.current.value = node?.data.label;
        }

        if (labelRef.current) {
            labelRef.current.style.backgroundColor = data.backgroundColor!;
            labelRef.current.style.width =
                data.label.length > 4 ? `${data.label.length + 4}ch` : "w-36";
        }
    }, [data, updateNode, dragMode]);

    return (
        <>
            <div
                className={
                    selected
                        ? `outline outline-[#66A9FF] outline-2 outline-offset-1`
                        : ""
                }>
                {dragMode === "text" && (
                    <input
                        ref={labelRef}
                        defaultValue={data.label}
                        className={`p-2 text-center border focus:outline-none`}
                        onChange={(event) => {
                            updateNodeLabel(event.target.value);
                            setSelectedNodes(nodes);
                        }}
                    />
                )}

                {dragMode !== "text" && (
                    <div
                        ref={labelRef}
                        className={`p-2 text-center border focus:outline-none bg-white`}>
                        {data.label}
                    </div>
                )}

                <Handle
                    type="target"
                    position={Position.Top}
                    id="targetT"
                    className={
                        selected || showNodeHandles ? "opacity-50" : "opacity-0"
                    }
                />
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="sourceB"
                    className={
                        selected || showNodeHandles ? "opacity-50" : "opacity-0"
                    }
                />
                <Handle
                    type="source"
                    position={Position.Right}
                    id="sourceR"
                    className={
                        selected || showNodeHandles ? "opacity-50" : "opacity-0"
                    }
                />
                <Handle
                    type="target"
                    position={Position.Left}
                    id="targetL"
                    className={
                        selected || showNodeHandles ? "opacity-50" : "opacity-0"
                    }
                />
            </div>
        </>
    );
}

export default CustomNode;
