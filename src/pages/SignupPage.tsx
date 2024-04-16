import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { CiCircleInfo } from "react-icons/ci";
import { ServerError } from "../entities/ServerError";

const schema = z.object({
    fullname: z
        .string()
        .min(5, { message: "Name must be at least 3 characters" }),
    email: z.string().email({ message: "Use a valid email" }),
    password: z
        .string()
        .min(5, { message: "password must be more than 5 chraracters" }),
});

type FormData = z.infer<typeof schema>;

const SignupPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const navigate = useNavigate();
    const [showPasswordInfo, setShowPasswordInfo] = useState(false);
    const [serverError, setServerError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        await axios
            .post("http://localhost:8000/api/users", data)
            .then(({ headers }) => {
                // navigate("/");
                setIsLoading(false);
                localStorage.setItem("access_token", headers["x-auth-token"]);
            })
            .catch(({ response }: AxiosError) => {
                const data = response?.data as ServerError;
                setServerError(data.error);
                setIsLoading(false);
            });
    };

    return (
        <div className="h-lvh flex flex-row items-center">
            <div className="p-5 mx-auto border border-gray-800 rounded-md min-h-96 min-w-96 max-w-96">
                <h1 className="text-3xl font-medium mb-4">Sign Up</h1>
                <form className="text-lg" onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block my-2">
                            Full Name
                        </label>
                        <input
                            {...register("fullname")}
                            type="text"
                            name="fullname"
                            id="fullname"
                            className="px-3 py-1 w-full border rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                        />

                        {errors.fullname && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.fullname.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block my-2">
                            Email
                        </label>
                        <input
                            {...register("email")}
                            type="text"
                            name="email"
                            id="email"
                            className="px-3 py-1 w-full border rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                        />

                        {errors.email && (
                            <p className="text-red-500 mt-1 text-sm">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block my-2">
                            Password
                        </label>
                        <input
                            {...register("password")}
                            type="password"
                            name="password"
                            id="password"
                            onFocus={() => setShowPasswordInfo(true)}
                            onBlur={() => setShowPasswordInfo(false)}
                            className="px-3 py-1 w-full border rounded-md focus:outline-sky-500 focus:outline focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                        />
                        <div
                            className={`${
                                showPasswordInfo ? "opacity-100" : "opacity-0"
                            } flex flex-row items-center mt-1 text-xs text-wrap`}>
                            <div className="mr-2">
                                <CiCircleInfo />
                            </div>
                            <div>
                                password must be 8 characters long and contain
                                least a special character and number
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid || isLoading}
                        className="py-2 px-4 w-full border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 disabled:bg-sky-300 transition duration-500 ease-in-out">
                        {isLoading ? (
                            <ScaleLoader height={10} width={3} color="white" />
                        ) : (
                            "Sign up"
                        )}
                    </button>
                </form>

                <p className="text-red-500 mt-2 text-sm text-center">
                    {serverError}
                </p>

                <hr className="w-full my-7 border border-gray-500" />
            </div>
        </div>
    );
};

export default SignupPage;
