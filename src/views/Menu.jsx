import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (user && user.id) {
      const userId = user.id;
      const getUserData = async () => {
        const response = await axios.get("/users.json");
        const userData = response.data.find((user) => user.id === userId);
        setName(userData.name);
        setLastName(userData.lastName);
      };
      getUserData();
    }
  }, [user]);

  return (
    <div>
      {user && (
        <h2>
          Bienvenido {name} {lastName}
        </h2>
      )}
      <Link to="/new-event" className="btn btn-primary">
        Crear nuevo evento
      </Link>
      <Link to="/events" className="btn btn-primary">
        Ver eventos guardados
      </Link>
      <Link to="/profile" className="btn btn-primary">
        Modificar datos
      </Link>
      <button onClick={handleLogout} className="btn btn-danger">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Menu;
