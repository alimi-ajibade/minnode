import { useEffect, useRef } from "react";
import _ from "lodash";
import { Handle, NodeProps, Position } from "reactflow";
import useRFStore from "./store";
import { NodeData } from "../../entities/NodeData";
import { useShallow } from "zustand/react/shallow";
import useUIStore from "../../store";

function CustomNode({ id, data, selected }: NodeProps<NodeData>) {
    const labelRef = useRef<HTMLInputElement>(null);

    const [nodes, updateNodeLabel, updateNode, setSelectedNodes] = useRFStore(
        useShallow((s) => [
            s.nodes,
            s.updateNodeLabel,
            s.updateNodeData,
            s.setSelectedNodes,
        ])
    );

    const showNodeHandles = useUIStore((s) => s.showNodeHandles);

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
                    selected
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
