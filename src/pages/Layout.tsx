import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <>
            <div
                className={`relative font-sans ${
                    pathname === "/"
                        ? "bg-gradient-to-r from-purple-50 to-pink-50"
                        : "bg-gray-100"
                }`}>
                {pathname.includes("mindmap") === false && (
                    <div
                        className={`fixed z-10 top-0 w-screen  ${
                            pathname === "/"
                                ? "border-b border-gray-700 bg-gray-50"
                                : "bg-gray-100"
                        } h-14 `}>
                        <NavBar />
                    </div>
                )}

                <main>
                    <Outlet />
                </main>

                {pathname === "/" && (
                    <div className="absolute bottom-0 w-full h-10 bg-gray-800 text-white">
                        <Footer />
                    </div>
                )}
            </div>
        </>
    );
};

export default Layout;
