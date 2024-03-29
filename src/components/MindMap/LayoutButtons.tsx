import {
    BiSolidObjectsHorizontalLeft,
    BiSolidObjectsVerticalTop,
} from "react-icons/bi";
import useLayoutNodes from "../../hooks/useLayoutNodes";
import { Tooltip } from "react-tooltip";

const LayoutButtons = () => {
    const onLayout = useLayoutNodes();
    return (
        <>
            <div className="m-3">
                <button
                    className={`border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out`}
                    data-tooltip-id="horizontal-button"
                    onClick={() => onLayout("LR")}>
                    <BiSolidObjectsHorizontalLeft />
                </button>
                <Tooltip
                    id="horizontal-button"
                    place="bottom"
                    content="layout nodes horizontally"
                />
            </div>
            <div className="m-3">
                <button
                    className={`border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out`}
                    data-tooltip-id="vertical-button"
                    onClick={() => onLayout("TB")}>
                    <BiSolidObjectsVerticalTop />
                </button>
                <Tooltip
                    id="vertical-button"
                    place="bottom"
                    content="layout nodes vertically"
                />
            </div>
        </>
    );
};

export default LayoutButtons;
