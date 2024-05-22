import { MarkerType } from "reactflow";
import planets from "../../assets/planetIcons";

const exampleMindmap = {
    nodes: [
        {
            id: "Rqo6YfGkbJ",
            type: "mindmap",
            data: {
                label: "Inner Planets",
                backgroundColor: "#abb8c3",
                icon: planets.planets,
            },
            height: 42,
            width: 161,
            position: {
                x: 80,
                y: 499,
            },
        },
        {
            id: "MPrnotqNlS",
            type: "mindmap",
            data: {
                label: "Mercury",
                backgroundColor: "#fcb900",
                icon: planets.mercury,
            },
            height: 42,
            width: 104,
            position: {
                x: 283,
                y: 371,
            },
        },
        {
            id: "UCPfZce1Lr",
            type: "mindmap",
            data: {
                label: "Venus",
                backgroundColor: "#f78da7",
                icon: planets.venus,
            },
            height: 42,
            width: 85,
            position: {
                x: 283,
                y: 463,
            },
        },
        {
            id: "VPmvlzzc_P",
            type: "mindmap",
            data: {
                label: "Earth",
                backgroundColor: "#0693e3",
                icon: planets.earth,
            },
            height: 42,
            width: 85,
            position: {
                x: 283,
                y: 555,
            },
        },
        {
            id: "QPKAAvj2QG",
            type: "mindmap",
            data: {
                label: "Mars",
                backgroundColor: "#ff6900",
                icon: planets.mars,
            },
            height: 42,
            width: 144,
            position: {
                x: 283,
                y: 647,
            },
        },
    ],
    edges: [
        {
            id: "reactflow__edge-Rqo6YfGkbJsourceR-UCPfZce1LrtargetL",
            source: "Rqo6YfGkbJ",
            target: "UCPfZce1Lr",
            sourceHandle: "sourceR",
            targetHandle: "targetL",
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#FF0072",
            },
            style: {
                strokeWidth: 1.5,
                stroke: "#FF0072",
            },
            animated: true,
        },
        {
            id: "reactflow__edge-Rqo6YfGkbJsourceR-VPmvlzzc_PtargetL",
            source: "Rqo6YfGkbJ",
            target: "VPmvlzzc_P",
            sourceHandle: "sourceR",
            targetHandle: "targetL",
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#FF0072",
            },
            style: {
                strokeWidth: 1.5,
                stroke: "#FF0072",
            },
            animated: true,
        },
        {
            id: "reactflow__edge-Rqo6YfGkbJsourceR-MPrnotqNlStargetL",
            source: "Rqo6YfGkbJ",
            target: "MPrnotqNlS",
            sourceHandle: "sourceR",
            targetHandle: "targetL",
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#FF0072",
            },
            style: {
                strokeWidth: 1.5,
                stroke: "#FF0072",
            },
            animated: true,
        },
        {
            id: "reactflow__edge-Rqo6YfGkbJsourceR-QPKAAvj2QGtargetL",
            source: "Rqo6YfGkbJ",
            target: "QPKAAvj2QG",
            sourceHandle: "sourceR",
            targetHandle: "targetL",
            markerEnd: {
                type: MarkerType.ArrowClosed,
                width: 15,
                height: 15,
                color: "#FF0072",
            },
            style: {
                strokeWidth: 1.5,
                stroke: "#FF0072",
            },
            animated: true,
        },
    ],
};

export default exampleMindmap;
