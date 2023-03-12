import React from "react";
import { useParams } from "react-router-dom";
import useEventData from "../hooks/useEventData";

function EventDetail() {
  const { id } = useParams();
  const events = useEventData();
  const event = events.find((event) => event.id === Number(id));

  return (
    <div className="container my-5">
      {event ? (
        <div className="row">
          <div className="col-md-6">
            <img
              src={event.imagen_evento}
              alt={event.nombre_evento}
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2 className="mb-3">{event.nombre_evento}</h2>
            <p className="fw-bold mb-0">Tipo de evento: </p>
            <p>{event.tipo_evento}</p>
            <p className="fw-bold mb-0">Fecha: </p>
            <p>{event.fecha}</p>
            <p className="fw-bold mb-0">Hora: </p>
            <p>{event.hora}</p>
            <p className="fw-bold mb-0">Descripción: </p>
            <p>{event.descripcion}</p>
            <p className="fw-bold mb-0">Precio: </p>
            <p>{event.precio}</p>
            <p className="fw-bold mb-0">Región: </p>
            <p>{event.region}</p>
            <p className="fw-bold mb-0">Comuna: </p>
            <p>{event.comuna}</p>
            <p className="fw-bold mb-0">Dirección: </p>
            <p>{event.direccion}</p>
            <p className="fw-bold mb-0">Likes: </p>
            <p>{event.likes}</p>
            <p className="fw-bold mb-0">Comentarios: </p>
            <p>{event.comentarios}</p>
          </div>
        </div>
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default EventDetail;
