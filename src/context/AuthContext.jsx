import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch("/users.json");
    const data = await response.json();
    const foundUser = data.users.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      console.log("Usuario guardado:", foundUser);
    } else {
      throw new Error("Credenciales inválidas");
    }
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = () => {
    return user ? true : false;
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
