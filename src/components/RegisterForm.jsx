import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ onRegisterSuccess }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [rut, setRut] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    if (password.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }
    try {
      const res = await axios.get("/users.json");
      const users = res.data;
      const emailExists = users.some((user) => user.email === email);
      const nicknameExists = users.some((user) => user.nickname === nickname);
      const rutExists = users.some((user) => user.rut === rut);
      if (emailExists || nicknameExists || rutExists) {
        setError("El correo, nickname o RUT ya existe");
        return;
      }
      const newUser = {
        name,
        lastName,
        nickname,
        email,
        rut,
        password,
      };
      await axios.post("/users.json", newUser);
      onRegisterSuccess();
    } catch (err) {
      setError("Hubo un error al procesar la solicitud");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">
              Apellido
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="nickname" className="form-label">
              Nickname
            </label>
            <input
              type="text"
              className="form-control"
              id="nickname"
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label htmlFor="rut" className="form-label">
              RUT
            </label>
            <input
              type="text"
              className="form-control"
              id="rut"
              onChange={(e) => setRut(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="password2" className="form-label">
          Repetir Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password2"
          onChange={(e) => setRepeatPassword(e.target.value)}
          minLength={8}
          required
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <button type="submit" className="btn btn-primary">
        Registrarse
      </button>
    </form>
  );
};

export default RegisterForm;
