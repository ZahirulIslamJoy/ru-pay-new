import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import router from "./route/Route";
import Authprovider from "./providers/Authprovider";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router}></RouterProvider>
      </Authprovider>
  
  </React.StrictMode>
);
reportWebVitals();
