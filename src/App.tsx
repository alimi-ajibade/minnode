import { useState } from "react";
import AddButton from "./components/AddButton";
import AddNodeForm from "./components/AddNodeForm";

const App = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <AddNodeForm isVisible={isVisible} />
            <AddButton setFormVisibility={() => setIsVisible(!isVisible)} />
        </>
    );
};

export default App;
