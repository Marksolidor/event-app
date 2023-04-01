import React from "react";

const Error404 = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <h2 className="display-4 mb-3">Página no encontrada</h2>
            <p className="lead mb-4">
              Lo siento, la página que estás buscando no se encuentra
              disponible.
            </p>
            <a href="/" className="btn btn-primary">
              Ir a la página principal
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;
