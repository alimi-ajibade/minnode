import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    marginTop?: string;
}

const SectionContainer = ({
    children,
    marginTop = "lg:mt-10 mt-16",
}: Props) => {
    return (
        <section
            className={`flex lg:flex-row flex-col items-center min-h-[500px] ${marginTop}`}>
            {children}
        </section>
    );
};

export default SectionContainer;
