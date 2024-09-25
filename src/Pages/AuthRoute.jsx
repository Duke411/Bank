import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

const AuthRoute = ({ children }) => {
  const authCtx = useContext(AuthContext);

  if (authCtx.isLoggedIn) {
    // Redirect to the dashboard (or any other protected page)
    return <Navigate to="/bankdashboard" />;
  }

  // If not logged in, render the login page
  return children;
};

export default AuthRoute;
