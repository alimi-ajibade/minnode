import { ReactNode, useEffect } from "react";
import authService from "../services/auth";
import { useNavigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const getCurrentUser = async () => {
            await authService
                .getCurrentUser()
                .then(() => {
                    return;
                })
                .catch(() => {
                    return navigate("/login");
                });
        };

        getCurrentUser();
    }, []);

    return children;
};

export default ProtectedRoute;
