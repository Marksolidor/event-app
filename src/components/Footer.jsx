import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Acerca de nosotros</h5>
            <p>
              Somos un sitio web que permite a los usuarios publicar y descubrir
              eventos en la ciudad de Santiago de Chile.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Enlaces</h5>

            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-dark">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/eventos" className="text-dark">
                  Eventos
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-dark">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="text-dark">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Síguenos</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Contacto</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-dark">
                  Correo electrónico
                </a>
              </li>
              <li>
                <a href="#!" className="text-dark">
                  Teléfono
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {new Date().getFullYear()} Mi Sitio Web
      </div>
    </footer>
  );
};

export default Footer;
