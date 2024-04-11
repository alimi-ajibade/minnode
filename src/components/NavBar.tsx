import { SectionWrapper } from "./hoc";
import { RiMindMap } from "react-icons/ri";

const NavBar = () => {
    return (
        <nav className="flex flex-row min-h-12 border-2 items-center justify-between p-2">
            <div className="text-3xl flex flex-row">
                <RiMindMap className="text-4xl" />
                <span className="font-bold"> SimpleMind</span>
            </div>

            <div>Signup / Login</div>
        </nav>
    );
};

export default SectionWrapper(NavBar);
