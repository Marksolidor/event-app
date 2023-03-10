import { useState, useEffect } from "react";

function useEventData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const jsonData = async () => {
      try {
        const response = await fetch("/events.json");
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
