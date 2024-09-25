import React, { useState, useEffect } from "react";
const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token, user) => {},
  logout: () => {},
  user: null,
});

export const AuthContextProvider = (props) => {
  const initialStorage = localStorage.getItem("token");
  const initialuserData = localStorage.getItem("userdata");
  const [token, setToken] = useState(initialStorage);
  const [user, setUser] = useState(initialuserData);

  const userIsLoggedIn = !!token;

  const logInHandler = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("userdata", JSON.stringify(user));
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userdata");
    setUser(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
    user: user,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
