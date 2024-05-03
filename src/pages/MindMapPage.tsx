import { Slide, ToastContainer } from "react-toastify";
import Mindmap from "../components/MindMap/Mindmap";

const MindMapPage = () => {
    return (
        <div className="relative w-screen h-screen">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                closeButton={false}
                theme="dark"
                transition={Slide}
                style={{
                    // fontSize: "0.9rem",
                    textAlign: "center",
                }}
            />
            <Mindmap />
        </div>
    );
};

export default MindMapPage;
