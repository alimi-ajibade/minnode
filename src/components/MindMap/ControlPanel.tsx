import AddNodeButton from "./AddNodeButton";
import ColorPicker from "./ColorPicker";
import DeleteButton from "./DeleteButton";
import DownloadButton from "./DownloadButton";
import LayoutButtons from "./LayoutButtons";

const ControlPanel = () => {
    return (
        <div className="z-10 absolute top-[32%] left-2 lg:left-4 lg:py-3 w-10 lg:w-14 bg-white rounded-md shadow-md">
            <AddNodeButton />
            <DeleteButton />
            <LayoutButtons />
            <DownloadButton />
            <ColorPicker />
        </div>
    );
};

export default ControlPanel;
