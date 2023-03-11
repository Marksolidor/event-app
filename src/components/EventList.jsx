import React from "react";

function EventList({ events }) {
  return (
    <div>
      {events.length > 0 ? (
        events.map((event) => (
          <div key={event.id} className="row my-4">
            <div className="col-md-3">
              <img
                src={event.imagen_evento}
                alt={event.nombre_evento}
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h2 className="text-center mb-3">{event.nombre_evento}</h2>
              <div className="row">
                <div className="col-sm-6 mb-3">
                  <p className="fw-bold mb-0">Fecha: </p>
                  <p>{event.fecha}</p>
                  <p className="fw-bold mb-0">Hora: </p>
                  <p>{event.hora}</p>
                </div>
                <div className="col-sm-6 mb-3">
                  <p className="fw-bold mb-0">Precio: </p>
                  <p>{event.precio}</p>
                  <p className="fw-bold mb-0">Comuna: </p>
                  <p>{event.comuna}</p>
                </div>
              </div>
              <p className="mb-0">Likes: {event.likes}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default EventList;
