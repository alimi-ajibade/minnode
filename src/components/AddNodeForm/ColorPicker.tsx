import { useState } from "react";
import { TwitterPicker, ColorResult } from "react-color";

interface Props {
    background: string;
    setBackground: (color: ColorResult) => void;
}

const ColorPicker = ({ background, setBackground }: Props) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="relative">
            <p className="block my-2">Select Color</p>
            <button
                className={`w-10 h-10 border rounded-md`}
                style={{ backgroundColor: background }}
                onClick={() => setIsVisible(!isVisible)}
                type="button"></button>

            <div className={`${!isVisible && "hidden"} w-max absolute`}>
                <TwitterPicker
                    onChangeComplete={(color) => {
                        setBackground(color);
                        setIsVisible(!isVisible);
                    }}
                    color={background}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
