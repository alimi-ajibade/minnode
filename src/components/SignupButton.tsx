import { useNavigate } from "react-router-dom";

interface Props {
    onClick?: () => void;
    className: string;
}

const SignupButton = ({ onClick, className }: Props) => {
    const navigate = useNavigate();
    return (
        <button
            className={className}
            onClick={() => {
                navigate("/sign-up");
                if (onClick) onClick();
            }}>
            Sign up
        </button>
    );
};

export default SignupButton;
