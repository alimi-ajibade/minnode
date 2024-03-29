import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const ScreenInfo = ({ children }: Props) => {
    return (
        <div className="grid grid-col-1 justify-items-center animate-fade text-xl text-center font-semibold">
            {children}
        </div>
    );
};

export default ScreenInfo;
