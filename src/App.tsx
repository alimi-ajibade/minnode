import AddButton from "./components/AddNodeForm/AddButton";
import AddNodeForm from "./components/AddNodeForm/AddNodeForm";
import Mindmap from "./components/MindMap/Mindmap";

const App = () => {
    return (
        <div className="h-screen">
            <AddNodeForm />
            <AddButton />
            <Mindmap />
        </div>
    );
};

export default App;
