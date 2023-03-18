import { NavLink } from "react-router-dom";
import './styleNav.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-custom">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <img src="https://i.pinimg.com/originals/d4/23/22/d42322c800455d4879530a474bc7479c.png" alt="logo" width="190" height="55" className="d-inline-block align-text-top"/>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex ms-auto"></form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/CrearEvento" className="nav-link">
                Crear Evento
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Iniciar sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                Registrarse
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/menu" className="nav-link">
                Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
