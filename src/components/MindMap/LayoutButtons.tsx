import {
    BiSolidObjectsHorizontalLeft,
    BiSolidObjectsVerticalTop,
} from "react-icons/bi";
import useLayoutNodes from "../../hooks/useLayoutNodes";

const LayoutButtons = () => {
    const onLayout = useLayoutNodes();
    return (
        <>
            <div className="m-3">
                <button
                    className={`border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out`}
                    onClick={() => onLayout("LR")}>
                    <BiSolidObjectsHorizontalLeft />
                </button>
            </div>
            <div className="m-3">
                <button
                    className={`border border-3 rounded-md py-2 px-4 bg-gray-500 hover:bg-gray-600 active:bg-grey-800 text-gray-50 transition duration-500 ease-in-out`}
                    onClick={() => onLayout("TB")}>
                    <BiSolidObjectsVerticalTop />
                </button>
            </div>
        </>
    );
};

export default LayoutButtons;
