import { useShallow } from "zustand/react/shallow";
import useUIStore from "../../store";
import Button from "./Button";
import { PiPresentationDuotone } from "react-icons/pi";
import { SiGooglegemini } from "react-icons/si";
import UserProfilePicture from "../UserProfilePicture";
import AIAssistant from "./AIAssistant";

const TopRightPanel = () => {
    const [
        setPresentationMode,
        showAssistant,
        setShowAssistant,
        fetchingAIResponse,
    ] = useUIStore(
        useShallow((s) => [
            s.setPresentationMode,
            s.showAssitant,
            s.setShowAssitant,
            s.fetchingAIResponse,
        ])
    );

    return (
        <>
            <div
                className={`flex flex-row items-center justify-center gap-3 w-42 h-1 lg:h-12 py-4 lg:py-5 px-3 text-xs lg:text-lg rounded-full shadow-md bg-white transition-[width] duration-500 ease-in-out`}>
                <Button
                    dataTooltipId="ask-gemini"
                    tooltipContent="Ask Gemini for help"
                    onCLick={() => setShowAssistant(!showAssistant)}>
                    <div className="relative">
                        <SiGooglegemini
                            className={`text-blue-500 row-span-2 ${
                                fetchingAIResponse
                                    ? "animate-pulse duration-[1.5]"
                                    : ""
                            }`}
                        />
                        <SiGooglegemini
                            className={`text-blue-500 size-2 absolute top-0 right-0 ${
                                fetchingAIResponse
                                    ? "animate-pulse duration-700"
                                    : ""
                            }`}
                        />
                        <SiGooglegemini
                            className={`text-blue-500 size-2 absolute bottom-0 right-0 ${
                                fetchingAIResponse
                                    ? "animate-pulse duration-500"
                                    : ""
                            }`}
                        />
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

            {showAssistant && <AIAssistant />}
        </>
    );
};

export default TopRightPanel;
