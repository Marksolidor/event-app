import React, { createContext, useState } from "react";
import axios from "axios";

const UrlApi = "http://localhost:3000";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${UrlApi}/login`, { email, password });
      localStorage.setItem("accessToken", response.data.accessToken);
      const userData = { ...response.data, id: response.data.userId }; // Incluimos el id del usuario en el objeto userData
      setUser(userData);
    } catch (error) {
      console.error(error);
      throw new Error("Error de inicio de sesión");
    }
  };

  const logout = async () => {
    try {
      const response = await axios.post(`${UrlApi}/logout`);
      localStorage.removeItem("accessToken");
      setUser(null);
    } catch (error) {
      console.error(error);
      throw new Error("Error de cierre de sesión");
    }
  };

  const isAuthenticated = () => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? true : false;
  };

  const contextValue = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={contextValue} {...props} />;
}

export { AuthProvider, AuthContext };
