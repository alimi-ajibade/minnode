import apiClient from "./api-client";

interface LoginData {
    email: string;
    password: string;
}

interface SignupData {
    fullname: string;
    email: string;
    password: string;
}

class Auth {
    login(data: LoginData) {
        return apiClient.post("/auth", data);
    }

    signup(data: SignupData) {
        return apiClient.post("/users", data);
    }

    getCurrentUser() {
        return apiClient({
            method: "get",
            url: "/users",
            headers: {
                "x-auth-token": sessionStorage.getItem("access_token"),
            },
        });
    }
}

const authService = new Auth();

export default authService;
