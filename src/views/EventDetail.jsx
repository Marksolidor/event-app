import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useEventData from "../hooks/useEventData";
import FormularyComment from "../components/Comments";
import { Link } from "react-router-dom";

function EventDetail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const events = useEventData();
  const event = events.find((event) => event.id === Number(id));
  const [liked, setLiked] = useState(false);

  if (events.length > 0 && loading) {
    setLoading(false);
  }

  const handleLike = () => {
    setLiked(true);

    event.likes += 1;
  };
  return (
    <div className="container my-5">
      {loading ? (
        <p className="text-center">Cargando evento...</p>
      ) : event ? (
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
            <p>
            <li className="nav-item">
              <Link to="/Favorites" className="nav-link">
                Mis Favoritos
              </Link>
            </li>
              <button onClick={handleLike} disabled={liked}>
                <i
                  className={`bi bi-heart${liked ? "-fill" : ""}`}
                  style={{ color: liked ? "red" : "inherit" }}
                ></i>
              </button>{" "}
              {event.likes}
            </p>
            <div className="container my-5">
              {}
              <p className="fw-bold mb-0">Comentarios: </p>
              {Array.isArray(event.comentarios) &&
                event.comentarios.map((comment) => (
                  <div key={comment.id}></div>
                ))}
            </div>
            <FormularyComment />
          </div>
        </div>
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default EventDetail;
