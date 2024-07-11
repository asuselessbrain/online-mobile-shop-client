import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./authProvider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </AuthProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
