import { useState } from "react";
import {
    BiAddToQueue,
    BiDownload,
    BiSolidObjectsHorizontalLeft,
    BiSolidObjectsVerticalTop,
} from "react-icons/bi";
import { MdDeleteForever, MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import ScreenInfo from "./ScreenInfo";

const TutorialScreen = () => {
    const [isVisible, setIsVisible] = useState(0);
    const [showTutorial, setShowTutorial] = useState(true);

    const tutotialScreens = 6;

    return (
        <div
            className={`${
                !showTutorial && "hidden"
            } @container p-3 h-screen w-screen z-50 ${""} absolute flex flex-row justify-center items-center inset-0 backdrop-filter backdrop-blur-lg`}>
            <div className="relative flex flex-row justify-center items-center bg-gray-50 border border-3 rounded-md shadow-md w-full min-h-44 p-5 @md:w-96">
                <button
                    onClick={() => {
                        setShowTutorial(!showTutorial);
                    }}
                    className="absolute top-0 right-0 py-3 px-3 text-s text-zinc-800">
                    x
                </button>

                {isVisible === 0 && (
                    <ScreenInfo>
                        <p>Welcome</p>
                    </ScreenInfo>
                )}

                {isVisible === 1 && (
                    <ScreenInfo>
                        <div>Click the Button with</div>
                        <div className="border border-3 rounded-md py-2 px-4 bg-sky-600 text-gray-50">
                            <BiAddToQueue />
                        </div>
                        <div>icon to add a new node.</div>
                    </ScreenInfo>
                )}

                {isVisible === 2 && (
                    <ScreenInfo>
                        <div>Click the button with</div>
                        <div className="border border-3 rounded-md py-2 px-4 bg-red-500 text-gray-50">
                            <MdDeleteForever />
                        </div>
                        <div>icon to delete a selected node or edge.</div>
                    </ScreenInfo>
                )}

                {isVisible === 3 && (
                    <ScreenInfo>
                        <div>Click the button with</div>
                        <div className="border border-3 rounded-md py-2 px-4 bg-gray-500 text-gray-50">
                            <BiSolidObjectsHorizontalLeft />
                        </div>
                        <div>icon arrange nodes horizontally.</div>
                    </ScreenInfo>
                )}

                {isVisible === 4 && (
                    <ScreenInfo>
                        <div>Click the button with</div>
                        <div className="border border-3 rounded-md py-2 px-4 bg-gray-500 text-gray-50">
                            <BiSolidObjectsVerticalTop />
                        </div>
                        <div>icon arrange nodes vertically.</div>
                    </ScreenInfo>
                )}

                {isVisible === 5 && (
                    <ScreenInfo>
                        <div>Click the button with</div>
                        <div className="border border-3 rounded-md py-2 px-4 bg-gray-500 text-gray-50">
                            <BiDownload />
                        </div>
                        <div>icon to download mind map image</div>
                    </ScreenInfo>
                )}

                {isVisible === 6 && (
                    <ScreenInfo>
                        <p>Enjoy 🥳 </p>
                    </ScreenInfo>
                )}

                <div className="absolute bottom-0 right-0 m-2 text-md">
                    <button
                        className="disabled:opacity-0"
                        onClick={() => {
                            if (!(isVisible <= 0)) setIsVisible(isVisible - 1);
                        }}
                        disabled={isVisible === 0}>
                        <GrFormPrevious size={20} />
                    </button>{" "}
                    <button
                        className="disabled:opacity-0"
                        onClick={() => {
                            if (!(isVisible >= tutotialScreens))
                                setIsVisible(isVisible + 1);
                            if (isVisible === tutotialScreens) {
                                setShowTutorial(false);
                            }
                        }}>
                        <MdOutlineNavigateNext size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TutorialScreen;
