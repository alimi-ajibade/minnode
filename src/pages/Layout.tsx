import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <div className="relative font-sans bg-gradient-to-r min-h-dvh from-purple-50 to-pink-50">
            {pathname.includes("mindMap") === false && (
                <div className="fixed z-10 top-0 w-screen h-14 bg-gradient-to-r from-purple-100 to-pink-100">
                    <NavBar />
                </div>
            )}

            <main
                className={`${
                    !pathname.includes("mindMap") && "mt-5 lg:mt-10"
                }`}>
                <Outlet />
            </main>

            {pathname.includes("mindMap") === false && (
                <div className="w-full h-15 bg-gray-800 text-white">
                    <Footer />
                </div>
            )}
        </div>
    );
};

export default Layout;
