import icon from "../assets/mindmap.png";

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center min-h-full py-2">
            <div className="flex flex-row items-center gap-3 text-lg">
                <img src={icon} className="object-contain size-5" />
                <span>Minnode</span>
            </div>
            <div className="font-bold">&#169; {new Date().getFullYear()}</div>
        </footer>
    );
};

export default Footer;
