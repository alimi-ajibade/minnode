import Dagre from "@dagrejs/dagre";
import { useCallback } from "react";
import { Edge, Node, useReactFlow } from "reactflow";
import { Node as DagreNode } from "@dagrejs/dagre";
import useRFStore from "../components/MindMap/store";
import { useShallow } from "zustand/react/shallow";
import _ from "lodash";

const g = new Dagre.graphlib.Graph<Node>().setDefaultEdgeLabel(() => ({}));

const useLayoutNodes = () => {
    const { setEdges, setNodes, fitView } = useReactFlow();
    const [allNodes, allEdges, _selectedNodes, _selectedEdges] = useRFStore(
        useShallow((s) => [s.nodes, s.edges, s.selectedNodes, s.selectedEdges])
    );

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
            // if (selectedNodes.length > 1) {
            //     const nodes = selectedNodes;
            //     const edges = selectedEdges;

            //     const layouted = getLayoutedElements([...nodes], [...edges], {
            //         direction,
            //     });

            //     const unselectedNodes = [...allNodes].filter(
            //         (n) => !n.selected
            //     );
            //     const unselectedEdges = [...allEdges].filter(
            //         (e) => !e.selected
            //     );

            //     setNodes([...layouted.nodes, ...unselectedNodes]);
            //     setEdges([...layouted.edges, ...unselectedEdges]);
            // } else {
            //     const nodes = allNodes;
            //     const edges = allEdges;
            //     const layouted = getLayoutedElements([...nodes], [...edges], {
            //         direction,
            //     });

            //     setNodes([...layouted.nodes]);
            //     setEdges([...layouted.edges]);
            // }

            const nodes = allNodes;
            const edges = allEdges;
            const layouted = getLayoutedElements([...nodes], [...edges], {
                direction,
            });

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

            window.requestAnimationFrame(() => {
                fitView();
            });
        },
        [allNodes, allEdges]
    );

    return onLayout;
};

export default useLayoutNodes;
