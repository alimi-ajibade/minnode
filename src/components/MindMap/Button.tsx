import { ReactNode } from "react";
import { Tooltip, VariantType } from "react-tooltip";

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
                id={dataTooltipId}
                place="bottom"
                variant={tooltipVariant ? tooltipVariant : "dark"}
                content={tooltipContent}
            />
        </div>
    );
};

export default Button;
