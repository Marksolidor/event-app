import React from "react";

function UpcomingEvents(props) {
  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    const upcomingEvents = props.events.filter(
      (event) => new Date(event.fecha) > today
    );
    upcomingEvents.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    return upcomingEvents.slice(0, 3);
  };

  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="row">
      {upcomingEvents.map((event) => (
        <div className="col-md-4" key={event.id}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{event.nombre_evento}</h5>
              <p className="card-text">
                <strong>Date:</strong> {formatDate(event.fecha)}
              </p>
              <p className="card-text">
                <strong>Location:</strong> {event.location}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UpcomingEvents;
