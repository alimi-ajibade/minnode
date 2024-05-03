import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { SectionWrapper } from "../components/hoc";
import MindmapGrid from "../components/MindmapGrid";
import RenameFormModal from "../components/RenameFormModal";
import useDashboardStore from "../store";
import mindmapTemplates from "../entities/templateMindmaps";
import { Slide, ToastContainer } from "react-toastify";

const Dashboard = () => {
    const navigate = useNavigate();
    const setCurrentMindmap = useDashboardStore((s) => s.setCurrentMindmap);

    return (
        <>
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
            <div className="mt-14 min-h-[95vh] pb-3">
                <div className="mt-14">
                    <h1 className="pt-10 lg:text-4xl text-2xl font-semibold">
                        Create a Mindmap
                    </h1>

                    <div className="mt-5 py-3 px-5 bg-white rounded-md min-w-full overflow-scroll lg:overflow-auto">
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
                                    }}>
                                    <IoIosAdd color="#fff" />
                                </button>
                                <p className="mt-1 text-sm">New Mindmap</p>
                            </div>
                            {Object.keys(mindmapTemplates).map((key) => {
                                const template = mindmapTemplates[key];
                                return (
                                    <div
                                        key={key}
                                        className="hidden lg:flex flex-col">
                                        <button
                                            className="bg-gray-100 max-w-48 min-w-48 min-h-36 max-h-36 overflow-hidden rounded-md hover:border border-blue-700 transition duration-500"
                                            onClick={() => {
                                                const id = nanoid(10);
                                                setCurrentMindmap({
                                                    ...template.mindmap,
                                                    fileId: id,
                                                });
                                                navigate(`/app/mindmap/${id}`);
                                            }}>
                                            <img
                                                src={template.image}
                                                className="object-cover"
                                            />
                                        </button>
                                        <p className="mt-1 text-sm">
                                            {template.mindmap.filename}
                                        </p>
                                    </div>
                                );
                            })}
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
