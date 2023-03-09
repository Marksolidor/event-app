import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    jsonData();
  }, []);

  const jsonData = async () => {
    try {
      const response = await fetch("/events.json");
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      alert("Mensaje del Servidor: No se pudo establecer la conexión");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Eventos</h1>
      <div className="row">
        {Array.isArray(events) && events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className="col-lg-4 mb-4">
              <div className="card h-100">
                <img
                  src={event.imagen_evento}
                  className="card-img-top"
                  alt={event.nombre_evento}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.nombre_evento}</h5>
                  <p className="card-text">{event.descripcion}</p>
                </div>
                <div className="card-footer">
                  <NavLink
                    className="btn btn-primary btn-block"
                    to={`/event/${event.id}`}
                  >
                    Ver detalles
                  </NavLink>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default Home;
