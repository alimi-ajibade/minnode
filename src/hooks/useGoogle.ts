import { useGoogleLogin } from "@react-oauth/google";
import { User } from "../entities/User";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServerError } from "../entities/ServerError";
import apiClient from "../services/api-client";
import useServerError from "./useServerError";

export const useGoogle = () => {
    const [googleIsLoading, setGoogleIsLoading] = useState(false);
    const { serverError, setServerError } = useServerError();
    const navigate = useNavigate();

    const googleAuth = useGoogleLogin({
        onSuccess: async (response) => {
            setGoogleIsLoading(true);

            axios
                .get<User>("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                })
                .then((res) => {
                    const googleUserInfo = res.data as User;

                    apiClient
                        .post("/auth/google", {
                            fullname: googleUserInfo.name,
                            email: googleUserInfo.email,
                            picture: googleUserInfo.picture,
                        })
                        .then(({ headers }) => {
                            sessionStorage.setItem(
                                "access_token",
                                headers["x-auth-token"]
                            );
                            sessionStorage.setItem(
                                "current_user",
                                JSON.stringify({
                                    name: googleUserInfo.name,
                                    email: googleUserInfo.email,
                                    picture: googleUserInfo.picture,
                                })
                            );

                            setGoogleIsLoading(false);
                            navigate("/app/dashboard");
                        })
                        .catch(({ response }: AxiosError) => {
                            const data = response?.data as ServerError;
                            setServerError({
                                ...serverError,
                                google: data.error,
                            });
                            setGoogleIsLoading(false);
                            return;
                        });
                })
                .catch(() => {
                    setServerError({
                        ...serverError,
                        google: "Google Sign-in is not available at this moment",
                    });
                    setGoogleIsLoading(false);
                    return;
                });
        },

        onError: (response) => {
            setServerError({
                ...serverError,
                google: response.error_description!,
            });
        },
        flow: "implicit",
    });

    return { googleAuth, googleIsLoading };
};
