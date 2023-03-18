import React from "react";
import useEventData from "../hooks/useEventData";

function FavoriteEvents() {
  const favoriteEvents = JSON.parse(localStorage.getItem("favoriteEvents")) || [];
  const events = useEventData();
  const favoriteEventsData = events.filter((event) => favoriteEvents.includes(event.id));
  
  return (
    <div className="container my-5">
      <h2 className="mb-3">Mis favoritos</h2>
      {favoriteEventsData.length > 0 ? (
        <div className="row">
          {favoriteEventsData.map((event) => (
            <div className="col-md-6" key={event.id}>
              <img
                src={event.imagen_evento}
                alt={event.nombre_evento}
                className="img-fluid"
              />
              <h3>{event.nombre_evento}</h3>
              <p>{event.descripcion}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No tienes eventos favoritos</p>
      )}
    </div>
  );
}

export default FavoriteEvents;
