import FormContainer from "./components/AddNodeForm/FormContainer";
import Mindmap from "./components/MindMap/Mindmap";
import TutorialScreen from "./components/TutorialScreen/TutorialScreen";

const App = () => {
    return (
        <div className="h-screen relative">
            <TutorialScreen />
            <FormContainer />
            <Mindmap />
        </div>
    );
};

export default App;
