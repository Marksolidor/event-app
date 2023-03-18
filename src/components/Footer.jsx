import { NavLink } from "react-router-dom";
import './styleFooter.css';

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Acerca de nosotros</h5>
            <p className="text-light">
              Somos un sitio web que permite a los usuarios publicar y descubrir
              eventos en la ciudad de Santiago de Chile.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Enlaces</h5>

            <ul className="list-unstyled">
              <li>
                <NavLink to="/" className="text-light">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/eventos" className="text-light">
                  Eventos
                </NavLink>
              </li>

              <li>
                <NavLink to="/contacto" className="text-light">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Síguenos</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/1177/1177566.png"
            alt="Facebook"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/1177/1177491.png"
            alt="Twitter"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/1177/1177585.png"
            alt="Instagram"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-0">Contacto</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/3415/3415779.png"
            alt="Correo Electronico"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/3059/3059590.png"
            alt="Teléfono"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
              <li>
                <a href="#!" className="text-light">
                  <img
            src="https://cdn-icons-png.flaticon.com/512/4100/4100036.png"
            alt="Whatsapp"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     <div
  className="text-center text-light p-3"
  style={{ backgroundColor: "rgba(0, 0, 0, 0.4)", display: "flex", justifyContent: "center", alignItems: "center" }}
>
  <div className="">
    <img
      src="https://i.pinimg.com/originals/08/2d/a9/082da9086e12588d766fa358135c1232.png"
      alt="Logo-Footer"
      width="200"
      height="60"
      className="d-inline-block align-text-top"
    />
  </div>
  <div>
    © {new Date().getFullYear()} Mi Sitio Web
  </div>         
</div>

    </footer>
  );
};

export default Footer;
