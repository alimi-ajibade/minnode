import { ReactNode, useEffect, useState } from "react";
import useServerError from "../hooks/useServerError";

interface Props {
    children: ReactNode;
}

const DisappearingText = ({ children }: Props) => {
    const [isFading, setIsFading] = useState(false);
    const { serverError } = useServerError();

    useEffect(() => {
        const fadeTimeout = setTimeout(() => {
            setIsFading(true);
        }, 5000);

        return () => {
            setIsFading(false);
            return clearTimeout(fadeTimeout);
        };
    }, [serverError]);

    return (
        <div
            className={`transition duration-300 ${
                isFading ? "opacity-0" : "opacity-100"
            }`}>
            {children}
        </div>
    );
};

export default DisappearingText;
