import { toPng } from "html-to-image";
import { BiDownload } from "react-icons/bi";
import {
    getNodesBounds,
    getViewportForBounds,
    useReactFlow,
    Node,
} from "reactflow";
import Button from "./Button";
import downloadImage from "../../services/download";
import useRFStore, { NodeData } from "./store";
import removeHandles from "../../utils/removeHandles";

const imageWidth = 1024;
const imageHeight = 768;

const DownloadButton = () => {
    const { getNodes } = useReactFlow();
    const setSelectedNode = useRFStore((s) => s.setSelectedNode);
    const onClick = () => {
        setSelectedNode([] as Node<NodeData>[]);
        const nodesBounds = getNodesBounds(getNodes());
        const transform = getViewportForBounds(
            nodesBounds,
            imageWidth,
            imageHeight,
            0.5,
            2
        );

        removeHandles();

        const mindMap: HTMLElement = document.querySelector(
            ".react-flow__viewport"
        ) as HTMLElement;

        toPng(mindMap, {
            backgroundColor: "#eee",
            width: imageWidth,
            height: imageHeight,
            style: {
                width: imageWidth.toString(),
                height: imageHeight.toString(),
                transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.zoom})`,
            },
        }).then(downloadImage);
    };
    return (
        <Button
            dataTooltipId="download-button"
            onCLick={onClick}
            tooltipContent="download mind map">
            <BiDownload />
        </Button>
    );
};

export default DownloadButton;
