import { toPng } from "html-to-image";
import { BiDownload } from "react-icons/bi";
import { getNodesBounds, getViewportForBounds, useReactFlow } from "reactflow";
import downloadImage from "../../services/download";
import { Tooltip } from "react-tooltip";

const imageWidth = 1024;
const imageHeight = 768;

const DownloadButton = () => {
    const { getNodes } = useReactFlow();
    const onClick = () => {
        const nodesBounds = getNodesBounds(getNodes());
        const transform = getViewportForBounds(
            nodesBounds,
            imageWidth,
            imageHeight,
            0.5,
            2
        );

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
        <div className="m-3">
            <button
                className={`border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out`}
                data-tooltip-id="download-button"
                onClick={onClick}>
                <BiDownload />
            </button>
            <Tooltip
                id="download-button"
                place="bottom"
                content="download mind map"
            />
        </div>
    );
};

export default DownloadButton;
