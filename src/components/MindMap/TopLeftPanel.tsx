import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
    filename: string | undefined;
}

const TopLeftPanel = ({ filename }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-1 text-xs lg:text-lg rounded-md shadow-md box-border w-content bg-white hover:cursor-pointer">
                <div
                    onClick={() => navigate("/app/dashboard")}
                    className="py-3 px-2 rounded-md hover:text-blue-700 hover:bg-blue-200 transition duration-300 ease-in-out">
                    <IoIosArrowBack />
                </div>

                <p>{filename ? filename : "Untitled"}</p>
            </div>
        </>
    );
};

export default TopLeftPanel;
