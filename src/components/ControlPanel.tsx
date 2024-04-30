import { useState } from "react";
import AddNodeButton from "./MindMap/AddNodeButton";
import ColorPicker from "./MindMap/ColorPicker";
import DeleteButton from "./MindMap/DeleteButton";
import DownloadButton from "./MindMap/DownloadButton";
import LayoutButtons from "./MindMap/LayoutButtons";
import { ReactFlowProvider } from "reactflow";

const ControlPanel = () => {
    const [showColorPicker, setShowColorPicker] = useState(false);

    return (
        <ReactFlowProvider>
            <div className="absolute top-[32%] right-5 py-3 w-14 bg-white rounded-md shadow-md">
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
