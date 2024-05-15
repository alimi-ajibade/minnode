import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { SectionWrapper } from "../components/hoc";
import MindmapGrid from "../components/MindmapGrid";
import RenameFormModal from "../components/RenameFormModal";
import useUIStore from "../store";
import { Slide, ToastContainer } from "react-toastify";
import { PartialMindmap } from "../entities/Mindmap";
import MindmapTemplates from "../components/MindmapTemplates";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
    const navigate = useNavigate();
    const setCurrentMindmap = useUIStore((s) => s.setCurrentMindmap);

    return (
        <>
            <ToastContainer
                containerId={"dashboard"}
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                closeButton={false}
                theme="dark"
                transition={Slide}
                className={"text-center rounded-md text-sm w-fit"}
            />
            <div className="mt-14 min-h-[95vh] pb-3">
                <div className="mt-14">
                    <h1 className="pt-10 lg:text-4xl text-2xl font-semibold">
                        Create a Mindmap
                    </h1>

                    <div className="mt-5 py-3 px-5 lg:bg-white rounded-md min-w-full overflow-scroll lg:overflow-auto">
                        <h4 className="hidden lg:flex font-medium mb-2">
                            Templates
                        </h4>
                        <div className="flex flex-row gap-5">
                            <div>
                                <button
                                    className="flex justify-center items-center max-w-48 min-w-48 min-h-36 rounded-md bg-purple-500 text-6xl hover:bg-purple-600 transition duration-500"
                                    onClick={() => {
                                        const id = nanoid(10);
                                        navigate(`/app/mindmap/${id}`);
                                        setCurrentMindmap({} as PartialMindmap);
                                    }}>
                                    <IoIosAdd color="#fff" />
                                </button>
                                <p className="mt-1 text-sm">New Mindmap</p>
                            </div>

                            <MindmapTemplates />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="lg:text-2xl text-2xl font-semibold">
                        Recents
                    </h1>
                    <MindmapGrid />
                </div>
            </div>
            <RenameFormModal />
        </>
    );
};

export default SectionWrapper(Dashboard);
