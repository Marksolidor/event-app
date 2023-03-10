import React from "react";
import { NavLink } from "react-router-dom";

function Top_Events(props) {
  const { events } = props;

  // Sort the events array by number of likes, in descending order
  const sortedEvents = events.sort((a, b) => b.likes - a.likes);

  // Get the first 3 events with the most likes
  const topThreeEvents = sortedEvents.slice(0, 3);

  // Render the top events
  return (
    <div className="row">
      {topThreeEvents.map((event) => (
        <div className="col-md-4" key={event.id}>
          <div className="card">
            <NavLink to={`/events/${event.id}`}>
              <img
                src={event.imagen_evento}
                className="card-img-top"
                alt={event.nombre_evento}
              />
            </NavLink>
            <div className="card-body">
              <h5 className="card-title">{event.nombre_evento}</h5>
              <p className="card-text">
                <strong>Date:</strong> {event.fecha}
              </p>
              <p className="card-text">
                <strong>Location:</strong> {event.direccion}
              </p>
              <p className="card-text">
                <strong>Likes:</strong> {event.likes}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Top_Events;
