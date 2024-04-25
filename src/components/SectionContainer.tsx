import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    classNames?: string;
}

const SectionContainer = ({
    children,
    classNames = "lg:mt-10 mt-16",
}: Props) => {
    return (
        <section
            className={`flex lg:flex-row flex-col items-center min-h-[500px] ${classNames}`}>
            {children}
        </section>
    );
};

export default SectionContainer;
