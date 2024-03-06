import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RiseLoader } from "react-spinners";
import { AuthContext } from "../providers/Authprovider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-[70vh] flex flex-col justify-center items-center">
        <RiseLoader size={15} color="#1e2a4a" />
      </div>
    );
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" replace state={location.pathname}></Navigate>;
  }
};

export default PrivateRoute;