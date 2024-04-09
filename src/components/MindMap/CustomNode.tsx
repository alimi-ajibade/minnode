import { useEffect, useRef, useState } from "react";
import { Handle, NodeProps, Position } from "reactflow";
import useRFStore, { NodeData } from "./store";
import { GithubPicker } from "react-color";

function CustomNode({ id, data }: NodeProps<NodeData>) {
    const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);
    const labelRef = useRef<HTMLInputElement>(null);
    const colorPickerRef = useRef<HTMLDivElement>(null);

    const {
        nodes,
        updateNodeLabel,
        updateNode,
        setSelectedNode,
        selectedNode,
    } = useRFStore();

    useEffect(() => {
        const node = nodes.find((node) => node.id === id);

        if (labelRef.current !== null && node?.data.label) {
            labelRef.current.value = node?.data.label;
        }
    }, [nodes, updateNode]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                colorPickerRef.current &&
                !colorPickerRef.current.contains(event.target as Node)
            ) {
                setIsColorPickerVisible(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div ref={colorPickerRef} className="relative">
                <div className="relative">
                    <input
                        ref={labelRef}
                        defaultValue={data.label}
                        style={{
                            backgroundColor: data.backgroundColor,
                            outlineColor: data.backgroundColor,
                        }}
                        className="p-2 border rounded text-center focus:outline outilne-2"
                        onFocus={() => {
                            setIsColorPickerVisible(true);
                        }}
                        onChange={(event) => {
                            updateNodeLabel(event.target.value);
                            setSelectedNode(nodes);
                        }}
                    />
                    <Handle
                        type="target"
                        position={Position.Top}
                        id="targetT"
                    />
                    <Handle
                        type="source"
                        position={Position.Bottom}
                        id="sourceB"
                    />
                    <Handle
                        type="source"
                        position={Position.Right}
                        id="sourceR"
                    />
                    <Handle
                        type="target"
                        position={Position.Left}
                        id="targetL"
                    />
                </div>

                <div
                    className={`${
                        isColorPickerVisible ? "" : "hidden"
                    } mt-2 ml-1.5`}>
                    <GithubPicker
                        triangle="hide"
                        width="11.7rem"
                        colors={[
                            "#eeeeee",
                            "#FF7F4D",
                            "#FCCB00",
                            "#00CC33",
                            "#33A3BB",
                            "#66A9FF",
                            "#3399FF",
                        ]}
                        onChangeComplete={(color) => {
                            updateNode({
                                ...selectedNode.data,
                                backgroundColor: color.hex,
                            });
                        }}
                    />
                </div>
            </div>
        </>
    );
}

export default CustomNode;
