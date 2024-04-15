import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import MindMapPage from "./pages/MindMapPage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: "/mindMap", element: <MindMapPage /> },
            { path: "/sign-up", element: <SignupPage /> },
            { path: "/login", element: <LoginPage /> },
        ],
    },
]);

export default router;
