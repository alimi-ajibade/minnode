import AddNodeButton from "./AddNodeButton";
import ColorPicker from "./ColorPicker";
import DeleteButton from "./DeleteButton";
import DownloadButton from "./DownloadButton";
import LayoutButtons from "./LayoutButtons";
import { ReactFlowProvider } from "reactflow";

interface Props {
    showColorPicker: boolean;
    setShowColorPicker: (value: boolean) => void;
}

const ControlPanel = ({ showColorPicker, setShowColorPicker }: Props) => {
    return (
        <ReactFlowProvider>
            <div className="z-10 absolute top-[32%] right-5 py-3 w-14 bg-white rounded-md shadow-md">
                <AddNodeButton />
                <DeleteButton />
                <LayoutButtons />
                <DownloadButton />
                <ColorPicker
                    showColorPicker={showColorPicker}
                    setShowColorPicker={(value) => setShowColorPicker(value)}
                />
            </div>
        </ReactFlowProvider>
    );
};

export default ControlPanel;
