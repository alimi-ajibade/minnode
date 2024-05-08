import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router.tsx";
import ServerErrorProvider from "./contexts/serverErrorContext.tsx";
import "./index.css";

const queryClient = new QueryClient();
const client_id = import.meta.env.VITE_MINDMAP_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={client_id}>
            <QueryClientProvider client={queryClient}>
                <ServerErrorProvider>
                    <RouterProvider router={router} />
                </ServerErrorProvider>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
