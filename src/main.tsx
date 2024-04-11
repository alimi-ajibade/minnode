import React from "react";
import ReactDOM from "react-dom/client";
import { ReactFlowProvider } from "reactflow";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ReactFlowProvider>
            <RouterProvider router={router} />
        </ReactFlowProvider>
    </React.StrictMode>
);
