import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { CiCircleInfo } from "react-icons/ci";
import { ScaleLoader } from "react-spinners";
import { ServerError } from "../entities/ServerError";
import apiClient from "../services/api-client";
import useServerError from "../hooks/useServerError";
import authService from "../services/auth";

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

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const [showPasswordInfo, setShowPasswordInfo] = useState(false);
    const { serverError, setServerError } = useServerError();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        await apiClient
            .post("/users", data)
            .then(({ headers }) => {
                localStorage.setItem("access_token", headers["x-auth-token"]);

                return authService.getCurrentUser();
            })
            .then(({ data }) => {
                localStorage.setItem("current_user", data.user.email);
                setIsLoading(false);
                navigate("/app/dashboard");
            })
            .catch(({ response }: AxiosError) => {
                const data = response?.data as ServerError;
                setServerError({ ...serverError, signup: data.error });
                setIsLoading(false);
                return;
            });
    };

    return (
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
                    className="px-3 py-1 w-full border border-gray-700 rounded-md focus:outline-sky-500 focus:outline focus:border-none focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
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
                    className="px-3 py-1 w-full border border-gray-700 rounded-md focus:outline-sky-500 focus:outline focus:border-none focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
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
                    className="px-3 py-1 w-full border border-gray-700 rounded-md focus:outline-sky-500 focus:outline focus:border-none focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                />
                <div
                    className={`${
                        showPasswordInfo ? "opacity-100" : "opacity-0"
                    } flex flex-row items-center mt-1 text-xs text-wrap`}>
                    <div className="mr-2">
                        <CiCircleInfo />
                    </div>
                    <div>
                        password must be 8 characters long and contain least a
                        special character and number
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
    );
};

export default SignUpForm;
