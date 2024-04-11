import { SectionWrapper } from "./hoc";

const Footer = () => {
    return (
        <footer className="flex justify-center items-center">
            <div className="lg:text-2xl flex flex-row gap-2 items-center mt-3">
                <div className="w-10 h-10">
                    <img src="/images/icon.png" className="oobject-contain" />
                </div>
                <span className="font-bold">
                    SimpleMind &#169; {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
};

export default SectionWrapper(Footer);
