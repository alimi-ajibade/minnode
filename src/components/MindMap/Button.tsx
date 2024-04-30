import { ReactNode, useRef } from "react";
import { Tooltip, VariantType, TooltipRefProps } from "react-tooltip";

interface Props {
    dataTooltipId: string;
    disabled?: boolean;
    children: ReactNode;
    tooltipVariant?: VariantType;
    tooltipContent: string;
    onCLick: () => void;
}

const Button = ({
    dataTooltipId,
    disabled,
    children,
    tooltipContent,
    tooltipVariant,
    onCLick,
}: Props) => {
    const toolTipRef = useRef<TooltipRefProps>(null);

    const afterShow = () => {
        let timeoutId: NodeJS.Timeout;
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
                className={`flex justify-center item-center px-[1.9px] py-1 rounded-md text-gray-500 w-full text-3xl disabled:text-gray-200 hover:text-blue-500 hover:bg-blue-300 transition duration-300 ease-in-out`}
                data-tooltip-id={dataTooltipId}
                onClick={onCLick}
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
