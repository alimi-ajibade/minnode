import { ScaleLoader } from "react-spinners";
import { FcGoogle } from "react-icons/fc";
import { useGoogle } from "../hooks/useGoogle";
import LoginForm from "../components/LoginForm";
import useServerError from "../hooks/useServerError";

const LoginPage = () => {
    const { serverError } = useServerError();

    const { googleAuth, googleIsLoading } = useGoogle(); // google authentication

    return (
        <div className="h-lvh flex flex-row items-center">
            <div className="p-5 mx-auto border border-gray-800 rounded-md min-h-96 min-w-96 max-w-96">
                <h1 className="text-3xl font-medium mb-4">Login</h1>
                <LoginForm />

                <hr className="w-full my-7 border border-gray-500" />

                <button
                    className="flex flex-row justify-center items-center py-2 px-4 w-full border border-3 rounded-md bg-white hover:bg-gray-700 hover:text-gray-50 disabled:opacity-50 transition duration-500 ease-in-out"
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

                <p className="text-red-500 mt-2 text-sm text-center">
                    {serverError.login ? serverError.login : serverError.google}
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
