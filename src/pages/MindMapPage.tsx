import { Slide, ToastContainer } from "react-toastify";
import Mindmap from "../components/MindMap/Mindmap";
import "react-toastify/dist/ReactToastify.css";

const MindMapPage = () => {
    return (
        <div className="relative w-screen h-screen">
            <ToastContainer
                containerId={"mindmap"}
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={true}
                closeButton={false}
                theme="dark"
                transition={Slide}
                className={"text-center rounded-md text-sm w-fit"}
            />
            <Mindmap />
        </div>
    );
};

export default MindMapPage;
