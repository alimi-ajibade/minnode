import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { SectionWrapper } from "../components/hoc";
import MindmapGrid from "../components/MindmapGrid";
import RenameForm from "../components/RenameForm";
import Glassbackdrop from "../components/Glassbackdrop";

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-14">
                <div className="mt-14">
                    <h1 className="pt-10 lg:text-4xl text-2xl font-semibold">
                        Create a Mindmap
                    </h1>

                    <div className="mt-5 p-3 bg-white rounded-md min-w-full">
                        <div
                            className="flex justify-center items-center max-w-48 min-h-36 rounded-md bg-purple-500 text-6xl hover:bg-purple-600 transition duration-500"
                            onClick={() => {
                                const id = nanoid(10);
                                navigate(`/app/mindmap/${id}`);
                            }}>
                            <IoIosAdd color="#fff" />
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h1 className="lg:text-2xl text-2xl font-semibold">
                        Recents
                    </h1>
                    <div className="flex flex-row gap-5 flex-wrap mt-5 p-3 bg-white rounded-md min-w-full">
                        <MindmapGrid />
                    </div>
                </div>
            </div>

            {false && (
                <Glassbackdrop>
                    <RenameForm />
                </Glassbackdrop>
            )}
        </>
    );
};

export default SectionWrapper(Dashboard);
