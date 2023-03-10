import React from "react";

function EventItem({ evento }) {
  return (
    <div className="row event-item mb-4">
      <div className="col-4">
        <img
          className="img-fluid"
          src={evento.imagen_evento}
          alt={evento.nombre_evento}
        />
      </div>
      <div className="col-8">
        <h2>{evento.nombre_evento}</h2>
        <p>{evento.descripcion}</p>
        <p>{evento.likes} likes</p>
      </div>
    </div>
  );
}

export default EventItem;
