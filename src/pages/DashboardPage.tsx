import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { SectionWrapper } from "../components/hoc";
import useMindmaps from "../hooks/useMindmaps";

const Dashboard = () => {
    const navigate = useNavigate();
    const { data: mindmaps } = useMindmaps();

    return (
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
                <h1 className="lg:text-2xl text-2xl font-semibold">Recents</h1>
                <div className="flex flex-row gap-5 flex-wrap mt-5 p-3 bg-white rounded-md min-w-full">
                    {mindmaps?.map((mindmap, index) => (
                        <div
                            className="relative flex flex-col columns-1 rows-2 max-w-52 h-64 rounded-md overflow-hidden bg-gray-100"
                            onClick={() =>
                                navigate(`/app/mindmap/${mindmap.name}`)
                            }
                            key={index}>
                            <div className="bg-pink-100 overflow-hidden basis-48">
                                <img
                                    src="/images/fileImage.webp"
                                    className="object-cover"
                                />
                            </div>
                            <div key={index} className="p-2">
                                <p key={index} className="text-sm">
                                    {"mindmap" + index}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Dashboard);
