interface Props {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const HamburgerButton = ({ isOpen, setIsOpen }: Props) => {
    const genericHamburgerLine = `h-[3px] w-6 my-[1.5px] rounded-full bg-gray-500 transition ease transform duration-300`;

    return (
        <button
            className="flex flex-col size-10 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}>
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "rotate-45 translate-y-2 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div
                className={`${genericHamburgerLine} ${
                    isOpen
                        ? "-rotate-45 -translate-y-1 opacity-50 group-hover:opacity-100"
                        : "opacity-50 group-hover:opacity-100"
                }`}
            />
        </button>
    );
};

export default HamburgerButton;
