import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const { pathname } = useLocation();
    const background =
        pathname === "/"
            ? "bg-gradient-to-r from-purple-50 to-pink-50"
            : "bg-gray-100";
    const height = pathname === "/" ? "h-auto" : "h-screen";
    const navbarBg =
        pathname === "/"
            ? "border-b border-gray-700 bg-gray-50"
            : "bg-gray-100";

    return (
        <>
            <div
                className={`relative flex flex-col font-sans w-full ${height} overflow-x-clip ${background}`}>
                {pathname.includes("mindmap") === false && (
                    <div
                        className={`sticky z-10 top-0 left-0 w-full basis-14 ${navbarBg}`}>
                        <NavBar />
                    </div>
                )}

                <main className="basis-full w-full px-5 lg:px-0">
                    <Outlet />
                </main>

                {pathname === "/" && (
                    <div className="basis-14 bg-gray-800 text-white">
                        <Footer />
                    </div>
                )}
            </div>
        </>
    );
};

export default Layout;
