import { createBrowserRouter } from "react-router-dom";
import Main from "../main/Main";
import Login from "../navPages/Login";
import Registration from "../navPages/Registration";
import Dashboard from "../components/layout/dashboard/Dashboard";
import Profile from "../components/layout/dashboard/users/Profile";
import PrivateRoute from "./PrivateRoute";
import Sendmoney from "../components/layout/dashboard/users/Sendmoney";
import Withdraw from "../components/layout/dashboard/users/Withdraw";
import AddMoney from "../components/layout/dashboard/AddMoney";
import TranactionHistory from "../components/layout/dashboard/users/TranactionHistory";

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
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          children:[
            {
              path:"profile",
              element:<Profile></Profile>
            },
            {
              path:"sendmoney",
              element:<Sendmoney></Sendmoney>
            },
            {
              path:"withdraw",
              element:<Withdraw></Withdraw>
            },
            {
              path:"addmoney",
              element:<AddMoney></AddMoney>
            },
            {
              path:"history",
              element:<TranactionHistory></TranactionHistory>
            }
          ]
      },
      ],
    },
  ]);
export default router;