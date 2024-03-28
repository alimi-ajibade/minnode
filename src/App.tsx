import FormContainer from "./components/AddNodeForm/FormContainer";
import Mindmap from "./components/MindMap/Mindmap";

const App = () => {
    return (
        <div className="h-screen relative">
            <FormContainer />
            <Mindmap />
        </div>
    );
};

export default App;
