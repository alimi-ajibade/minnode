import { useState } from "react";
import { TwitterPicker, ColorResult } from "react-color";

const ColorPicker = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [background, setBackground] = useState({} as ColorResult);

    return (
        <div className="relative">
            <p className="block my-2">Select Color</p>
            <button
                className={`w-10 h-10 border rounded-md`}
                style={{ backgroundColor: background.hex }}
                onClick={() => setIsVisible(!isVisible)}
                type="button"></button>

            <div className={`${!isVisible && "hidden"} w-max absolute`}>
                <TwitterPicker
                    onChangeComplete={(color) => {
                        setBackground(color);
                        setIsVisible(!isVisible);
                    }}
                    color={background.hex}
                />
            </div>
        </div>
    );
};

export default ColorPicker;
