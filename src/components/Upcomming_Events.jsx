import React from "react";

function UpcomingEventCard(props) {
  const { image, title, date, time } = props;

  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Date: {date}
          <br />
          Time: {time}
        </p>
      </div>
    </div>
  );
}

export default UpcomingEventCard;
