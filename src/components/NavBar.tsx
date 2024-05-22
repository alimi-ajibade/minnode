import { useState } from "react";
import { SectionWrapper } from "./hoc";
import { useNavigate, useLocation } from "react-router-dom";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";
import UserProfilePicture from "./UserProfilePicture";
import HamburgerButton from "./HamburgerButton";
import icon from "../assets/mindmap.png";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <nav
            className={`flex flex-row items-center justify-between py-2 lg:px-0 px-2`}>
            <div className="text-2xl flex flex-row gap-2 items-center justify-between w-full z-10">
                <div
                    className="flex flex-row items-center gap-2 hover:cursor-pointer"
                    onClick={() => navigate("/")}>
                    <img src={icon} className="object-contain size-10" />
                    <span className="font-bold">SimpleMind</span>
                </div>

                {pathname === "/" && (
                    <div className="lg:hidden">
                        <HamburgerButton
                            isOpen={showMenu}
                            setIsOpen={setShowMenu}
                        />
                    </div>
                )}
            </div>

            {pathname === "/" && (
                <div className="hidden lg:flex flex-row justify-between gap-2">
                    <LoginButton className="p-2 w-28 font-bold border-1 rounded-md outline outline-1 outline-neutral-700 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out" />
                    <SignupButton className="p-2 w-28 font-bold border-1 rounded-md outline outline-1 outline-neutral-700 bg-purple-200 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out" />
                </div>
            )}

            {pathname.includes("app") && <UserProfilePicture />}

            {/* Mobile */}
            <div
                className={`lg:hidden absolute inset-x-0 inset-y-14 w-full bg-gray-50 text-xl overflow-hidden duration-300 ease-out transition-all ${
                    showMenu ? "h-[50vh]" : "h-[0vh]"
                }`}>
                <ul className={`p-5`}>
                    <li>
                        <LoginButton
                            className="p-2 mt-5 w-full font-bold border-1 rounded-md outline outline-1 outline-neutral-700 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out"
                            onClick={() => setShowMenu(false)}
                        />
                    </li>
                    <li>
                        <SignupButton
                            className="p-2 mt-5 w-full font-bold border-1 rounded-md outline outline-1 outline-neutral-700 bg-purple-200 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out"
                            onClick={() => setShowMenu(false)}
                        />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SectionWrapper(NavBar);
