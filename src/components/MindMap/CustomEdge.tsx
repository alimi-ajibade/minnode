import { BaseEdge, EdgeProps, getSimpleBezierPath } from "reactflow";

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

    const [edgePath] = getSimpleBezierPath({
        sourceX: sourcePosition === "right" ? sourceX - 3 : sourceX,
        sourceY: sourcePosition === "bottom" ? sourceY - 3 : sourceY,
        targetX: targetPosition === "left" ? targetX + 3 : targetX,
        targetY: targetPosition === "top" ? targetY + 3 : targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} />
        </>
    );
}

export default CustomEdge;
