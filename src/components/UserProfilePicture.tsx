import OutsideClickHander from "./OutsideClickHander";
import { HiUserCircle } from "react-icons/hi2";
import { ImExit } from "react-icons/im";
import { useNavigate, useLocation } from "react-router-dom";
import useDashboardStore from "../store";
import { useShallow } from "zustand/react/shallow";
import { User } from "../entities/User";

const UserProfilePicture = () => {
    const [showLogout, setShowLogout] = useDashboardStore(
        useShallow((s) => [s.showLogout, s.setShowLogout])
    );
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const current_user = JSON.parse(
        sessionStorage.getItem("current_user")!
    ) as User;

    return (
        <OutsideClickHander onOutsideClick={() => setShowLogout(false)}>
            <div className="relative flex items-center">
                <button onClick={() => setShowLogout(true)}>
                    {current_user?.picture ? (
                        <img
                            src={current_user.picture}
                            className={`rounded-full ${
                                pathname.includes("mindmap")
                                    ? "size-6"
                                    : "size-9"
                            } lg:size-9 border-2 border-white`}
                        />
                    ) : (
                        <HiUserCircle
                            className={`${
                                pathname.includes("mindmap")
                                    ? "text-2xl"
                                    : "text-4xl"
                            } lg:text-4xl`}
                        />
                    )}
                </button>

                {showLogout && (
                    <div className="absolute w-72 top-10 -right-3 bg-white p-3 rounded-md text-sm lg:text-base shadow-md animate-in fade-in zoom-in">
                        <div className="flex flex-row items-center justify-start gap-2 mb-4">
                            {current_user.picture ? (
                                <img
                                    src={current_user.picture}
                                    className="rounded-full size-9 border-2 border-white"
                                />
                            ) : (
                                <HiUserCircle className="size-9" />
                            )}
                            <div className="w-full text-ellipsis overflow-hidden">
                                <p className="text-xl lg:text-2xl font-medium">
                                    {current_user.name}
                                </p>
                                <p>{current_user.email}</p>
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
