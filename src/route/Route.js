import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/Login";
import Registration from "../navPages/Registration";
import Dashboard from "../components/layout/dashboard/Dashboard";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children: [
        {
          path: "/login",
          element:<Login></Login>
        },
        {
            path: "/registration",
            element:<Registration></Registration>
        },
        {
          path: "/dashboard",
          element:<Dashboard></Dashboard>
      },
      ],
    },
  ]);
export default router;