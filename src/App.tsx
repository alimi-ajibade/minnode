import AddButton from "./components/AddNodeForm/AddButton";
import AddNodeForm from "./components/AddNodeForm/AddNodeForm";
import useFormStore from "./components/AddNodeForm/store";
import UpdateNodeForm from "./components/AddNodeForm/UpdateNodeForm";
import Mindmap from "./components/MindMap/Mindmap";

const App = () => {
    const { isVisible, isUpdateForm } = useFormStore();

    return (
        <div className="h-screen">
            {isUpdateForm ? <UpdateNodeForm /> : <AddNodeForm />}
            <AddButton />
            {!isVisible && <Mindmap />}
        </div>
    );
};

export default App;
