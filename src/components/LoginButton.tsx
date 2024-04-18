import { useNavigate } from "react-router-dom";

interface Props {
    onClick?: () => void;
    className: string;
}

const LoginButton = ({ onClick, className }: Props) => {
    const navigate = useNavigate();
    return (
        <button
            className={className}
            onClick={() => {
                navigate("/login");
                if (onClick) onClick();
            }}>
            Login
        </button>
    );
};

export default LoginButton;
