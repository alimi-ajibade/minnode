import { ReactNode } from "react";
import useFormStore from "./store";

interface Props {
    children: ReactNode;
}

const FormContainer = ({ children }: Props) => {
    const { isVisible } = useFormStore();
    return (
        <div
            className={`@container p-3 h-screen ${
                !isVisible && "hidden"
            } flex flex-row justify-center items-center`}>
            <div className="border border-3 rounded-md shadow-md flex-none w-full h-max p-5 @md:w-96">
                {children}
            </div>
        </div>
    );
};

export default FormContainer;
