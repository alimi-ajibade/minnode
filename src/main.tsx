import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ServerErrorProvider from "./contexts/serverErrorContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="146214411177-tt3i7hvipc7f1h3mg2fofluqvo1d9jf6.apps.googleusercontent.com">
            <ServerErrorProvider>
                <ReactFlowProvider>
                    <RouterProvider router={router} />
                </ReactFlowProvider>
            </ServerErrorProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
