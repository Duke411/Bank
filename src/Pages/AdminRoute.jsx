import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const AdminRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn || authCtx.user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return children;
};

export default AdminRoute;
