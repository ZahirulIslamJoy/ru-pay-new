import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import router from "./route/Route";
import Authprovider from "./providers/Authprovider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>
);
reportWebVitals();
