import { Slide, ToastContainer } from "react-toastify";
import Mindmap from "../components/MindMap/Mindmap";

const MindMapPage = () => {
    return (
        <div className="relative w-screen h-screen">
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                closeButton={false}
                theme="dark"
                transition={Slide}
                style={{
                    fontSize: "0.9rem",
                    textAlign: "center",
                    width: "fit-content",
                    top: 0,
                }}
            />
            <Mindmap />
        </div>
    );
};

export default MindMapPage;
