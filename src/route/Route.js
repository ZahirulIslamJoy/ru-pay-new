import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/Login";
import Registration from "../navPages/Registration";

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
      ],
    },
  ]);
export default router;