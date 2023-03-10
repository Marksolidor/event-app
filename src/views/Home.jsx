import React, { useState, useEffect } from "react";
import UpComming_Events from "../components/Upcomming_Events";

function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    jsonData();
  }, []);

  const jsonData = async () => {
    try {
      const response = await fetch("/events.json");
      const data = await response.json();
      setEvents(data);
    } catch (e) {
      alert("Mensaje del Servidor: No se pudo establecer la conexión");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Proximos Eventos</h1>
      <div className="row">
        {Array.isArray(events) && events.length > 0 ? (
          <UpComming_Events events={events} />
        ) : (
          <p className="text-center">No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default Home;
