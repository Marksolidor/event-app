import { useState, useEffect } from "react";

function useEventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const jsonData = async () => {
      try {
        const response = await fetch("https://eventapp-backend-production.up.railway.app/events");
        const data = await response.json();
        setEvents(data);
      } catch (e) {
        alert("Mensaje del Servidor: No se pudo establecer la conexión");
      }
    };
    jsonData();
  }, []);

  return events;
}

export default useEventData;
