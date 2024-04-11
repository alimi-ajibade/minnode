import { SectionWrapper } from "./hoc";

const NavBar = () => {
    return (
        <nav className="flex flex-row items-center justify-between p-2">
            <div className="lg:text-2xl flex flex-row gap-2 items-center">
                <div className="w-10 h-10">
                    <img src="/images/icon.png" className="oobject-contain" />
                </div>
                <span className="font-bold">SimpleMind</span>
            </div>

            <div>Signup / Login</div>
        </nav>
    );
};

export default SectionWrapper(NavBar);
