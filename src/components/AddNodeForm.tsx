interface Props {
    isVisible: boolean;
}

const AddNodeForm = ({ isVisible }: Props) => {
    return (
        <div
            className={`p-3 ${
                !isVisible && "invisible"
            } flex flex-row justify-center`}>
            <div>
                <div className="border border-3 rounded-md shadow-md flex-none w-96 p-5">
                    <h1 className="text-lg font-medium">Add Node</h1>
                    <form>
                        <label htmlFor="label" className="block my-2">
                            Label
                        </label>
                        <input
                            type="text"
                            name="label"
                            id="label"
                            className="px-3 py-1 w-full border border-1 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                        />
                        <label htmlFor="note" className="block my-2">
                            Note
                        </label>
                        <textarea
                            name="note"
                            id="note"
                            rows={5}
                            className="px-3 py-1 w-full h-194 resize-none border border-1 rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"></textarea>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddNodeForm;
