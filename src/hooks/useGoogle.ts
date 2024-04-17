import { useGoogleLogin } from "@react-oauth/google";
import { User } from "../entities/User";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ServerError } from "../entities/ServerError";

export const useGoogle = () => {
    const [googleIsLoading, setGoogleIsLoading] = useState(false);
    const navigate = useNavigate();

    const googleAuth = useGoogleLogin({
        onSuccess: async (response) => {
            setGoogleIsLoading(true);

            let userInfo = {} as User;

            await axios
                .get<User>("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        Authorization: `Bearer ${response.access_token}`,
                    },
                })
                .then((res) => {
                    userInfo = res.data;
                })
                .catch(() => {
                    console.log(
                        "Google Sign-in is not available at this moment"
                    );
                    setGoogleIsLoading(false);
                    return;
                });

            await axios
                .post("http://localhost:8000/api/auth/google", {
                    fullname: userInfo.name,
                    email: userInfo.email,
                })
                .then(({ headers }) => {
                    localStorage.setItem(
                        "access_token",
                        headers["x-auth-token"]
                    );
                    navigate("/");
                    setGoogleIsLoading(false);
                })
                .catch(({ response }: AxiosError) => {
                    const data = response?.data as ServerError;
                    console.log(data.error);
                    setGoogleIsLoading(false);
                    return;
                });
        },

        onError: (response) => {
            console.log(response.error_description!);
        },
        flow: "implicit",
    });

    return { googleAuth, googleIsLoading };
};
