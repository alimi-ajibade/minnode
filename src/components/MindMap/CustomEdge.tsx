import { BaseEdge, EdgeProps, getBezierPath } from "reactflow";

function CustomEdge(props: EdgeProps) {
    const {
        id,
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
    } = props;
    console.log(props);

    const [edgePath] = getBezierPath({
        sourceX: sourcePosition === "right" ? sourceX - 5 : sourceX,
        sourceY: sourcePosition === "bottom" ? sourceY - 5 : sourceY,
        targetX: targetPosition === "left" ? targetX + 5 : targetX,
        targetY: targetPosition === "top" ? targetY + 5 : targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
        </>
    );
}

export default CustomEdge;
