import { ReactNode, useRef } from "react";
import { Tooltip, VariantType, TooltipRefProps } from "react-tooltip";

interface Props {
    classNames: string;
    dataTooltipId: string;
    disabled?: boolean;
    children: ReactNode;
    tooltipVariant?: VariantType;
    tooltipContent: string;
    onCLick: () => void;
}

const Button = ({
    classNames,
    dataTooltipId,
    disabled,
    children,
    tooltipContent,
    tooltipVariant,
    onCLick,
}: Props) => {
    const toolTipRef = useRef<TooltipRefProps>(null);

    const afterShow = () => {
        let timeoutId: number;

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
        <div className="m-3">
            <button
                className={classNames}
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
