import { useState } from "react";
import OutsideClickHander from "./OutsideClickHander";
import { HiUserCircle } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";

const UserProfilePicture = () => {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    return (
        <OutsideClickHander onOutsideClick={() => setShowLogout(false)}>
            <div className="relative text-4xl flex items-center">
                <button onClick={() => setShowLogout(true)}>
                    <HiUserCircle />
                </button>

                {showLogout && (
                    <div className="absolute flex flex-row items-center gap-2 bg-white p-3 rounded-md text-lg top-10 animate-in fade-in zoom-in">
                        <div>
                            <ImExit />
                        </div>
                        <button
                            onClick={() => {
                                localStorage.removeItem("access_token");
                                localStorage.removeItem("current_user");
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
