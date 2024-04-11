import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
    const { pathname } = useLocation();

    return (
        <>
            {pathname.includes("mindMap") === false && <NavBar />}
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;
