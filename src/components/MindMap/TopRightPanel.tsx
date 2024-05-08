import Button from "./Button";
import useDashboardStore from "../../store";
import { PiPresentationDuotone } from "react-icons/pi";
import UserProfilePicture from "../UserProfilePicture";

const TopRightPanel = () => {
    const setPresentationMode = useDashboardStore((s) => s.setPresentationMode);
    return (
        <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md box-border w-content bg-white">
            <Button
                dataTooltipId="presentation-mode"
                tooltipContent="Presentation Mode"
                onCLick={() => setPresentationMode()}>
                <PiPresentationDuotone />
            </Button>
            <UserProfilePicture />
        </div>
    );
};

export default TopRightPanel;
