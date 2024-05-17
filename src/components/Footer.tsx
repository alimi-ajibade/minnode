const Footer = () => {
    return (
        <footer className="flex justify-center items-center min-h-full py-2">
            <div className="text-lg flex flex-row gap-2 items-center">
                <div className="w-5 h-5">
                    <img src="/images/icon.png" className="object-contain" />
                </div>
                <span className="font-bold">
                    SimpleMind &#169; {new Date().getFullYear()}
                </span>
            </div>
        </footer>
    );
};

export default Footer;
