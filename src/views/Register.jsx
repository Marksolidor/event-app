import React, { useContext } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { login } = useContext(AuthContext);

  const handleSubmit = async (formData) => {
    try {
      const res = await axios.get("/users.json");
      const users = res.data;
      const emailExists = users.some((user) => user.email === formData.email);
      const nicknameExists = users.some(
        (user) => user.nickname === formData.nickname
      );
      const rutExists = users.some((user) => user.rut === formData.rut);

      if (emailExists || nicknameExists || rutExists) {
        alert("Correo, nickname o RUT ya está registrado");
      } else if (formData.password !== formData.confirmPassword) {
        alert("Las contraseñas no coinciden");
      } else if (formData.password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres");
      } else {
        const newUser = {
          id: Date.now(),
          ...formData,
        };
        await axios.post("/users.json", newUser);
        login(newUser.email, newUser.password);
        alert("Usuario registrado con éxito, inicie sesión");
        window.location.href = "/";
      }
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
