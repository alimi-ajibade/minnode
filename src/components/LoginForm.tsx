import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { ScaleLoader } from "react-spinners";
import { ServerError } from "../entities/ServerError";
import useServerError from "../hooks/useServerError";
import authService from "../services/auth";

const schema = z.object({
    email: z.string().email({ message: "Use a valid email" }),
    password: z
        .string()
        .min(5, { message: "password must be more than 5 chraracters" }),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    const { serverError, setServerError } = useServerError();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const onSubmit = (data: FormData) => {
        setIsLoading(true);

        authService
            .login(data)
            .then(({ data }) => {
                sessionStorage.setItem("access_token", data["token"]);
                return authService.getCurrentUser();
            })
            .then(({ data }) => {
                sessionStorage.setItem(
                    "current_user",
                    JSON.stringify({
                        name: data.user.fullname,
                        email: data.user.email,
                        picture: data.user?.picture,
                    })
                );
                setIsLoading(false);
                navigate("/app/dashboard");
            })
            .catch(({ response }: AxiosError) => {
                const data = response?.data as ServerError;
                setServerError({ ...serverError, login: data.error });
                setIsLoading(false);
                return;
            });
    };

    return (
        <form className="text-lg" onSubmit={handleSubmit(onSubmit)}>
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

            <div className="mb-4">
                <label htmlFor="password" className="block my-2">
                    Password
                </label>
                <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    className="px-3 py-1 w-full border border-gray-700 rounded-md focus:outline-sky-500 focus:outline focus:border-none focus:ring-1 ring-offset-2 ring-sky-300 transition duration-300 ease-in-out"
                />
            </div>

            <button
                type="submit"
                disabled={!isValid || isLoading}
                className="py-2 px-4 w-full border border-3 rounded-md bg-sky-600 hover:bg-sky-700 active:bg-sky-900 text-gray-50 disabled:bg-sky-300 transition duration-500 ease-in-out">
                {isLoading ? (
                    <ScaleLoader height={10} width={3} color="white" />
                ) : (
                    "Login"
                )}
            </button>
        </form>
    );
};

export default LoginForm;
