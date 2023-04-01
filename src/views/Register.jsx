import React, { useContext } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    try {
      const res = await axios.post("https://eventapp-backend-production.up.railway.app/users/register", formData);
      const newUser = res.data;
      login(newUser.email, newUser.password);
      alert("Usuario registrado con éxito, inicie sesión");
      window.location.href = "/";
    } catch (error) {
      alert("Error de servidor");
    }
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Registrarse</h1>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Register;
