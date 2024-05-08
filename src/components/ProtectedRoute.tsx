import { ReactNode, useEffect } from "react";
import authService from "../services/auth";
import { useNavigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

const ProtectedRoute = ({ children }: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        authService
            .getCurrentUser()
            .then(() => {
                return;
            })
            .catch(() => {
                return navigate("/login");
            });
    }, []);

    return children;
};

export default ProtectedRoute;
