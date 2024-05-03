import { Slide, ToastContainer } from "react-toastify";
import Mindmap from "../components/MindMap/Mindmap";
import "react-toastify/dist/ReactToastify.css";

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
                className={"text-center rounded-md text-sm"}
            />
            <Mindmap />
        </div>
    );
};

export default MindMapPage;
