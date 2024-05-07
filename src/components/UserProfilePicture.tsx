import OutsideClickHander from "./OutsideClickHander";
import { HiUserCircle } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import useDashboardStore from "../store";
import { useShallow } from "zustand/react/shallow";

const UserProfilePicture = () => {
    const [showLogout, setShowLogout] = useDashboardStore(
        useShallow((s) => [s.showLogout, s.setShowLogout])
    );
    const navigate = useNavigate();

    return (
        <OutsideClickHander onOutsideClick={() => setShowLogout(false)}>
            <div className="relative text-4xl flex items-center">
                <button onClick={() => setShowLogout(true)}>
                    <HiUserCircle />
                </button>

                {showLogout && (
                    <div className="absolute bg-white p-3 rounded-md text-sm lg:text-base top-10 -right-3 shadow-md animate-in fade-in zoom-in">
                        <div className="flex flex-row items-center gap-2 mb-4">
                            <HiUserCircle className="text-4xl" />
                            <div>
                                <p className="text-xl lg:text-2xl font-medium">
                                    User Two
                                </p>
                                <p>User2@domain.com</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-row items-center gap-5 ml-2 hover:text-blue-600 transition duration-500 ease-in-out"
                            onClick={() => {
                                sessionStorage.removeItem("access_token");
                                sessionStorage.removeItem("current_user");
                                setShowLogout(false);
                                navigate("/");
                            }}>
                            <ImExit />
                            <button>Logout</button>
                        </div>
                    </div>
                )}
            </div>
        </OutsideClickHander>
    );
};

export default UserProfilePicture;
