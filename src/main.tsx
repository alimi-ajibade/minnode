import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "./router.tsx";
import ServerErrorProvider from "./contexts/serverErrorContext.tsx";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="146214411177-tt3i7hvipc7f1h3mg2fofluqvo1d9jf6.apps.googleusercontent.com">
            <QueryClientProvider client={queryClient}>
                <ServerErrorProvider>
                    <RouterProvider router={router} />
                </ServerErrorProvider>
            </QueryClientProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
