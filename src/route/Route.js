import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/login",
          element:<Login></Login>
        },
      ],
    },
  ]);
export default router;