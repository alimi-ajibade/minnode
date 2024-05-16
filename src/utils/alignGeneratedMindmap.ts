import Dagre from "@dagrejs/dagre";
import { Edge, Node } from "reactflow";
import { Node as DagreNode } from "@dagrejs/dagre";

const g = new Dagre.graphlib.Graph<Node>().setDefaultEdgeLabel(() => ({}));

const alignNodes = (nodes: Node[], edges: Edge[]) => {
    g.setGraph({ rankdir: "LR" });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) => g.setNode(node.id, node as unknown as DagreNode));

    Dagre.layout(g);

    return {
        nodes: nodes.map((node) => {
            const { x, y } = g.node(node.id);

            return { ...node, position: { x, y } };
        }),
        edges,
    };
};

export default alignNodes;
