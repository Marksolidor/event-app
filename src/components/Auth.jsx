import axios from "axios";

const UrlApi = "http://localhost:3000";

const login = async (email, password) => {
  try {
    const response = await axios.post(`${UrlApi}/login`, { email, password });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error de inicio de sesión");
  }
};

const logout = async () => {
  try {
    const response = await axios.post(`${UrlApi}/logout`);
    localStorage.removeItem("accessToken");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error de cierre de sesión");
  }
};

const isAuthenticated = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken ? true : false;
};

export { login, logout, isAuthenticated };
