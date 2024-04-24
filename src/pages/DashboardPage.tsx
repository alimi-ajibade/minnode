import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { SectionWrapper } from "../components/hoc";
import useMindmaps from "../hooks/useMindmaps";
import { TbDotsVertical } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import MindMap from "../entities/Mindmap";
import apiClient from "../services/api-client";
import Dropdowns from "../components/MindMap/Dropdowns";

const Dashboard = () => {
    const navigate = useNavigate();

    const [mindmaps, setMindmaps] = useState([] as MindMap[]);

    const [dropdowns, setDropdowns] = useState(
        [] as { id: string; isActive: boolean }[]
    );

    useEffect(() => {
        const fetchData = async () => {
            console.log("working");
            await apiClient({
                url: "/mindmap",
                method: "get",
                headers: {
                    "x-auth-token": localStorage.getItem("access_token"),
                },
            }).then((resp) => {
                const data = resp.data as MindMap[];
                setMindmaps(data);
                setDropdowns(
                    data.map((mindmap) => {
                        return { id: mindmap._id.toString(), isActive: false };
                    })
                );
            });
        };

        fetchData();
    }, []);

    const toggleDropdown = (id: string) => {
        setDropdowns([
            ...dropdowns.map((dropdown) => {
                if (dropdown.id === id)
                    return { ...dropdown, isActive: !dropdown.isActive };
                return dropdown;
            }),
        ]);
    };

    const handleDelete = async (id: string) => {
        setMindmaps(
            mindmaps.filter((mindmap) => {
                if (mindmap._id.toString() === id) return;
                return mindmap;
            })
        );

        await apiClient({
            url: `/mindmap/${id}`,
            method: "delete",
            headers: {
                "x-auth-token": localStorage.getItem("access_token"),
            },
        });

        return;
    };

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
                            className="relative flex flex-col columns-1 rows-2 min-w-52 max-w-52 h-64 rounded-md bg-gray-100"
                            key={mindmap._id.toString()}>
                            <div
                                onClick={() =>
                                    navigate(`/app/mindmap/${mindmap._id}`)
                                }
                                className="cursor-pointer absolute flex flex-col columns-1 justify-center items-center min-h-48 min-w-full rounded-md bg-gray-700 bg-opacity-70 text-white opacity-0 hover:opacity-100 transistion ease-in-out duration-300">
                                <p>View</p>
                                <div>
                                    <FaArrowRight />
                                </div>
                            </div>

                            <div
                                key={nanoid(5)}
                                className="bg-pink-100 basis-48 overflow-hidden rounded-md">
                                <img
                                    src="/images/fileImage.webp"
                                    className="object-cover"
                                />
                            </div>

                            <div
                                key={nanoid(5)}
                                className="p-2 flex flex-row justify-between">
                                <p className="text-sm">{mindmap.name}</p>

                                <div
                                    className="opacity-30 cursor-pointer w-4"
                                    onClick={() =>
                                        toggleDropdown(mindmap._id.toString())
                                    }>
                                    <TbDotsVertical />
                                </div>

                                {dropdowns[index].isActive && (
                                    <Dropdowns
                                        item={mindmap}
                                        toggle={toggleDropdown}
                                        deleteFn={handleDelete}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Dashboard);
