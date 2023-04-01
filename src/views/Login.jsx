import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("https://eventapp-backend-production.up.railway.app/users/login", {
        email,
        password
      });
      const token = response.data.token;
      localStorage.setItem("token", token);
      await login(email, password);
      window.location.replace("/");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mx-auto mt-5">
          <form onSubmit={handleLogin}>
            <h2 className="mb-3">Login</h2>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-3">
              Login
            </button>
          </form>
          {errorMessage && <p className="text-danger">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
