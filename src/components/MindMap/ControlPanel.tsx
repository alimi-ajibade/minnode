import AddNodeButton from "./AddNodeButton";
import ColorPicker from "./ColorPicker";
import DeleteButton from "./DeleteButton";
import DownloadButton from "./DownloadButton";
import LayoutButtons from "./LayoutButtons";
import SelectButton from "./SelectButton";
import PanButton from "./PanButton";
import TextButton from "./TextButton";

const ControlPanel = () => {
    return (
        <div className="h-fit lg:left-4 lg:py-3 w-10 lg:w-14 bg-white rounded-md shadow-md">
            <SelectButton />
            <PanButton />
            <TextButton />
            <AddNodeButton />
            <DeleteButton />
            <LayoutButtons />
            <DownloadButton />
            <ColorPicker />
        </div>
    );
};

export default ControlPanel;
