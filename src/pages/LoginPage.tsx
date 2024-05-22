import { ScaleLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import { useGoogle } from "../hooks/useGoogle";
import LoginForm from "../components/LoginForm";
import useServerError from "../hooks/useServerError";
import DisappearingText from "../components/DisappearingText";
import SignupButton from "../components/SignupButton";

const LoginPage = () => {
    const { serverError } = useServerError();

    const { googleAuth, googleIsLoading } = useGoogle(); // google authentication

    return (
        <div className="flex flex-col columns-1 justify-start items-center h-[93vh] p-3">
            <div className="p-5 mx-auto my-10 border border-gray-800 rounded-md min-h-96 w-11/12 max-w-xl bg-white">
                <h1 className="text-3xl font-medium mb-4">Login</h1>
                <LoginForm />

                <hr className="w-full my-7 border border-gray-500" />

                <button
                    className="flex flex-row justify-center items-center py-2 px-4 w-full border border-gray-700 rounded-md bg-white hover:bg-gray-700 hover:text-gray-50 disabled:opacity-50 transition duration-500 ease-in-out"
                    onClick={() => googleAuth()}
                    disabled={googleIsLoading}>
                    {googleIsLoading ? (
                        <ScaleLoader height={20} width={3} color="#333" />
                    ) : (
                        <>
                            <span className="mr-2 text-xl">
                                <FcGoogle />
                            </span>
                            <span>Continue with Google</span>
                        </>
                    )}
                </button>

                <div className="mt-2 flex flex-col columns-1 justify-center items-center">
                    <p>or</p>
                    <SignupButton className="p-2 mt-2 w-full font-bold border-1 rounded-md outline outline-1 outline-neutral-700 hover:bg-purple-400 active:bg-purple-600 transition duration-500 ease-in-out" />
                </div>
            </div>
            <div className="min-h-20">
                <DisappearingText>
                    <p className="text-red-500 mt-2 text-sm text-center">
                        {serverError.login}
                    </p>
                </DisappearingText>
                <DisappearingText>
                    <p className="text-red-500 mt-2 text-sm text-center">
                        {serverError.google}
                    </p>
                </DisappearingText>
            </div>
        </div>
    );
};

export default LoginPage;
