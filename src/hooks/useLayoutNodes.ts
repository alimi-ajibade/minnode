import Dagre from "@dagrejs/dagre";
import { useCallback } from "react";
import { Edge, Node, useReactFlow } from "reactflow";
import { Node as DagreNode } from "@dagrejs/dagre";
import useRFStore from "../components/MindMap/store";

const g = new Dagre.graphlib.Graph<Node>().setDefaultEdgeLabel(() => ({}));

const useLayoutNodes = () => {
    const { setEdges, setNodes, fitView } = useReactFlow();
    const { nodes, edges } = useRFStore();

    const getLayoutedElements = (
        nodes: Node[],
        edges: Edge[],
        options: { direction: string }
    ) => {
        g.setGraph({ rankdir: options.direction });

        edges.forEach((edge) => g.setEdge(edge.source, edge.target));
        nodes.forEach((node) =>
            g.setNode(node.id, node as unknown as DagreNode)
        );

        Dagre.layout(g);

        return {
            nodes: nodes.map((node) => {
                const { x, y } = g.node(node.id);

                return { ...node, position: { x, y } };
            }),
            edges,
        };
    };

    const onLayout = useCallback(
        (direction: string) => {
            const layouted = getLayoutedElements(nodes, edges, { direction });

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

            window.requestAnimationFrame(() => {
                fitView();
            });
        },
        [nodes, edges]
    );

    return onLayout;
};

export default useLayoutNodes;
