import { Handle, NodeProps, Position } from "reactflow";
import { NodeData as AppNodeData } from "../../entities/NodeData";
import earth from "../../assets/planetIcons/icons8-earth-96.png";

interface NodeData extends AppNodeData {
    icon: string;
}

const CustomNode = ({ id, data }: NodeProps<NodeData>) => {
    return (
        <div
            className={`flex flex-row items-center justify-center gap-2 p-2 text-center border focus:outline-none w-36 h-[2.6rem] bg-gray-50`}>
            <span>
                <img src={data.icon} className="size-5" />
            </span>
            <span>{data.label}</span>

            <Handle
                type="target"
                position={Position.Top}
                id="targetT"
                className={"opacity-0"}
            />
            <Handle
                type="source"
                position={Position.Bottom}
                id="sourceB"
                className={"opacity-0"}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="sourceR"
                className={"opacity-0"}
            />
            <Handle
                type="target"
                position={Position.Left}
                id="targetL"
                className={"opacity-0"}
            />
        </div>
    );
};

export default CustomNode;
