import React, { useState } from 'react';
import { login, isAuthenticated, logout } from './Auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log(data); // Imprime los datos de inicio de sesión en la consola
      redirectToHome(); // Redirige al usuario a la página principal
    } catch (error) {
      console.error(error);
      alert('Error de inicio de sesión'); // Muestra un mensaje de error al usuario
    }
  };

  const redirectToHome = () => {
    window.location.href = '/'; // Redirige al usuario a la página principal
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
      {isAuthenticated() && (
        <div>
          <p>El usuario ha ingresado correctamente</p>
          <button onClick={logout}>Cerrar sesión</button>
        </div>
      )}
    </div>
  );
};

export default Login;
