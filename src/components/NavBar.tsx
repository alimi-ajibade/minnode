import { useState } from "react";
import { SectionWrapper } from "./hoc";
import { IoMdMenu } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <nav className={`flex flex-row items-center justify-between p-2`}>
            <div className="text-2xl flex flex-row gap-2 items-center">
                {pathname.includes("login") === false &&
                    pathname.includes("sign-up") === false && (
                        <button
                            className="p-1 lg:hidden rounded-md bg-white"
                            onClick={() => setShowMenu(true)}>
                            <IoMdMenu size={25} />
                        </button>
                    )}

                <div
                    className="w-10 h-10 hover:cursor-pointer"
                    onClick={() => navigate("/")}>
                    <img src="/images/icon.png" className="oobject-contain" />
                </div>
                <span className="font-bold">SimpleMind</span>
            </div>

            {pathname === "/" ? (
                <div className="hidden lg:flex flex-row justify-between gap-2">
                    <LoginButton className="p-2 w-28 font-bold border-1 rounded-md outline outline-1 outline-neutral-700 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out" />
                    <SignupButton className="p-2 w-28 font-bold border-1 rounded-md outline outline-1 outline-neutral-700 bg-purple-200 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out" />
                </div>
            ) : (
                <></>
            )}

            {/* Mobile */}
            <div
                className={`lg:hidden absolute inset-0 h-screen w-2/3 bg-purple-50 text-xl duration-300 ease-out transition-all ${
                    showMenu ? "translate-x-0" : "-translate-x-full"
                }`}>
                <ul className="p-5">
                    <li className="flex flex-row justify-between items-center">
                        <span className="font-bold">Menu</span>
                        <button onClick={() => setShowMenu(false)}>
                            <MdClose />
                        </button>
                    </li>
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
