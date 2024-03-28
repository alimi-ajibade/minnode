import AddButton from "./components/AddNodeForm/AddButton";
import FormContainer from "./components/AddNodeForm/FormContainer";
import useFormStore from "./components/AddNodeForm/store";
import Mindmap from "./components/MindMap/Mindmap";

const App = () => {
    const { isVisible } = useFormStore();

    return (
        <div className="h-screen relative">
            <FormContainer />
            <AddButton />
            <Mindmap />
        </div>
    );
};

export default App;
