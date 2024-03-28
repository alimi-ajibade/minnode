import AddNodeForm from "./AddNodeForm";
import useFormStore from "./store";
import UpdateNodeForm from "./UpdateNodeForm";

const FormContainer = () => {
    const { isVisible, isUpdateForm } = useFormStore();
    return (
        <div
            className={`@container p-3 h-screen w-screen z-50 ${
                !isVisible && "hidden"
            } absolute flex flex-row justify-center items-center inset-0 backdrop-filter backdrop-blur-lg`}>
            <div className="bg-gray-50 border border-3 rounded-md shadow-md flex-none w-full h-max p-5 @md:w-96">
                {isUpdateForm ? <UpdateNodeForm /> : <AddNodeForm />}
            </div>
        </div>
    );
};

export default FormContainer;
