import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Menu = () => {
  const { user, logout } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (user && user.id) {
      fetch("/users.json")
        .then((response) => response.json())
        .then((data) => {
          const userData = data.find((u) => u.id === user.id);
          setName(userData.name);
          setLastName(userData.lastName);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  useEffect(() => {
    console.log("User:", user);
  }, [user]);

  return (
    <div className="mt-4 d-flex justify-content-center">
      {user && (
        <h2>
          Bienvenido {name} {lastName}
        </h2>
      )}
      <div className="btn-group-vertical w-80 d-flex justify-content-center">
        <Link to="/crearevento" className="btn btn-primary mb-3 btn-block">
          Crear nuevo evento
        </Link>
        <Link to="/Favorites" className="btn btn-primary mb-3 btn-block">
          Ver eventos guardados
        </Link>
        <Link to="/profile" className="btn btn-primary mb-3 btn-block">
          Modificar datos
        </Link>
        <button
          onClick={handleLogout}
          className="btn btn-danger mb-3 btn-block"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Menu;
