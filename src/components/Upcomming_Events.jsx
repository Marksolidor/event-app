import React from "react";
import { NavLink } from "react-router-dom";

function Upcomming_Events(props) {
  const { events } = props;

  // Get the current date
  const currentDate = new Date();

  // Filter the events array to only include the events happening in the future
  const upcomingEvents = events.filter(
    (event) => new Date(event.fecha) >= currentDate
  );

  // Sort the upcoming events array by date, in ascending order
  upcomingEvents.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

  // Get the first 3 upcoming events
  const firstThreeUpcomingEvents = upcomingEvents.slice(0, 3);

  // Render the upcoming events
  return (
    <div className="row">
      {firstThreeUpcomingEvents.map((event) => (
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
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Upcomming_Events;
