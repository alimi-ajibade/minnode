import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <div className="p-3">
                <h1 className="text-3xl">Oops...</h1>
                <p className="mt-2">
                    {isRouteErrorResponse(error)
                        ? "This Page does not exist"
                        : "Sorry, an unexpected error has occurred."}
                </p>
            </div>
        </>
    );
};

export default ErrorPage;
