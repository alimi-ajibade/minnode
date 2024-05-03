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
                    <div className="absolute flex flex-row items-center gap-2 bg-white p-3 rounded-md text-xs lg:text-lg top-10 shadow-md animate-in fade-in zoom-in">
                        <div>
                            <ImExit />
                        </div>
                        <button
                            onClick={() => {
                                sessionStorage.removeItem("access_token");
                                sessionStorage.removeItem("current_user");
                                setShowLogout(false);
                                navigate("/");
                            }}>
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </OutsideClickHander>
    );
};

export default UserProfilePicture;
