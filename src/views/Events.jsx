import React from "react";
import useEventData from "../hooks/useEventData";

function Events() {
  // Use custom hook to get event data
  const events = useEventData();

  return (
    <div className="container">
      <h1 className="text-center my-4">Eventos</h1>
      {Array.isArray(events) && events.length > 0 ? (
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
              <h2>{event.nombre_evento}</h2>
              <p>{event.descripcion}</p>
              <p className="mb-0">{event.likes} Likes</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default Events;