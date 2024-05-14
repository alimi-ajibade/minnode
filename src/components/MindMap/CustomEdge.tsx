import { BaseEdge, EdgeProps, getSimpleBezierPath } from "reactflow";
import _ from "lodash";

function CustomEdge(props: EdgeProps) {
    const {
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition,
        selected,
    } = props;

    const [edgePath] = getSimpleBezierPath({
        sourceX: sourcePosition === "right" ? sourceX - 3 : sourceX,
        sourceY: sourcePosition === "bottom" ? sourceY - 3 : sourceY,
        targetX: targetPosition === "left" ? targetX + 3 : targetX,
        targetY: targetPosition === "top" ? targetY + 3 : targetY,
    });

    const style = selected
        ? { stroke: "#66A9FF", strokeWidth: "2" }
        : { strokeWidth: "2" };

    return (
        <>
            <BaseEdge path={edgePath} style={style} />
        </>
    );
}

export default CustomEdge;
