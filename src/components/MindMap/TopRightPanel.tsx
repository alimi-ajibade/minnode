import Button from "./Button";
import useDashboardStore from "../../store";
import { PiPresentationDuotone } from "react-icons/pi";
import { SiGooglegemini } from "react-icons/si";
import UserProfilePicture from "../UserProfilePicture";

const TopRightPanel = () => {
    const setPresentationMode = useDashboardStore((s) => s.setPresentationMode);
    return (
        <div className="flex flex--row items-center justify-center gap-3 lg:h-12 h-1 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md box-border w-content bg-white">
            <Button
                dataTooltipId="ask-gemini"
                tooltipContent="Ask Gemini for help"
                onCLick={() => setPresentationMode()}>
                <div className="relative">
                    <SiGooglegemini className="text-blue-500 row-span-2" />
                    <SiGooglegemini className="text-blue-500 text-xs absolute top-0 right-0" />
                    <SiGooglegemini className="text-blue-500 text-xs absolute bottom-0 right-0" />
                </div>
            </Button>
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
