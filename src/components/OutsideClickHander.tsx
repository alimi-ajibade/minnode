import { ReactNode, useEffect, useRef } from "react";

interface Props {
    children: ReactNode;
    onOutsideClick: () => void;
}

const OutsideClickHander = ({ children, onOutsideClick }: Props) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            onOutsideClick();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={ref} className="w-max">
            {children}
        </div>
    );
};

export default OutsideClickHander;
