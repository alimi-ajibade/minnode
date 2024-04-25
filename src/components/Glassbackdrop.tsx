import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const Glassbackdrop = ({ children }: Props) => {
    return (
        <div
            className={`@container z-40 p-3 h-full w-full absolute inset-0 -py-5 flex flex-row justify-center items-center backdrop-filter backdrop-blur-lg`}>
            <div className="bg-gray-50 border border-3 rounded-md shadow-md flex-none w-full h-max p-5 @md:w-96">
                {children}
            </div>
        </div>
    );
};

export default Glassbackdrop;
