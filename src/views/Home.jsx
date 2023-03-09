import React, { useState, useEffect } from "react";
import UpcomingEventCard from "../components/Upcomming_Events";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/events.json");
      res
        .json()
        .then((res) => setEvents(res))
        .catch((err) => console.log(err));
    }

    fetchData();
  }, []);

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  const getUpcomingEvents = () => {
    const today = new Date();
    const upcomingEvents = events.filter(
      (event) => new Date(event.date) > today
    );
    upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
    return upcomingEvents.slice(0, 3);
  };

  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="container">
      <h1>Home</h1>

      <div className="row">
        {upcomingEvents.map((event) => (
          <div className="col-md-4" key={event.id}>
            <UpcomingEventCard
              image={event.image}
              title={event.name}
              date={formatDate(event.date)}
              time={event.time}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
