import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { AuthContext } from "../providers/Authprovider";
import Loader from "../components/loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return (
      <Loader></Loader>
    );
  }

  if (user) {
    return children;
  } else {
    navigate("/login");
    // Return null or loading indicator until navigation completes
    return null;
  }
};

export default PrivateRoute;
