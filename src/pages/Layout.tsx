import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={true}
                closeButton={false}
                theme="dark"
                transition={Slide}
                style={{
                    fontSize: "0.9rem",
                    textAlign: "center",
                    width: "fit-content",
                    top: 0,
                }}
            />
            <div
                className={`relative font-sans ${
                    pathname === "/"
                        ? "bg-gradient-to-r from-purple-50 to-pink-50"
                        : "bg-gray-100"
                }`}>
                {pathname.includes("mindmap") === false && (
                    <div
                        className={`fixed z-10 top-0 w-screen h-14 ${
                            pathname === "/"
                                ? "bg-gradient-to-r from-purple-100 to-pink-100"
                                : "bg-gray-100"
                        }`}>
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
