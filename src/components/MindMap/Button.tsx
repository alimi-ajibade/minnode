import { ReactNode, useRef } from "react";
import { Tooltip, VariantType, TooltipRefProps } from "react-tooltip";

interface Props {
    className?: string;
    dataTooltipId: string;
    disabled?: boolean;
    children: ReactNode;
    tooltipVariant?: VariantType;
    tooltipContent: string;
    onClick: () => void;
}

const Button = ({
    className,
    dataTooltipId,
    disabled,
    children,
    tooltipContent,
    tooltipVariant,
    onClick: onClick,
}: Props) => {
    const toolTipRef = useRef<TooltipRefProps>(null);

    const afterShow = () => {
        let timeoutId: any;
        if (toolTipRef.current?.isOpen) {
            timeoutId = setTimeout(() => {
                toolTipRef.current?.close();
            }, 3000);
        }
        return () => {
            clearTimeout(timeoutId);
        };
    };

    return (
        <div className="px-1 my-3">
            <button
                className={`${className} flex justify-center item-center px-[1.9px] py-1 rounded-md text-gray-500 w-full text-xl lg:text-3xl focus:border-none disabled:text-gray-200 hover:text-blue-700 hover:bg-blue-200 transition duration-300 ease-in-out`}
                data-tooltip-id={dataTooltipId}
                onClick={onClick}
                disabled={disabled}>
                {children}
            </button>
            <Tooltip
                ref={toolTipRef}
                id={dataTooltipId}
                place="bottom"
                variant={tooltipVariant ? tooltipVariant : "dark"}
                content={tooltipContent}
                afterShow={afterShow}
            />
        </div>
    );
};

export default Button;
