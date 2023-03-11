import { useState, useEffect } from "react";

function useSortedEvents(events, sort) {
  const [sortedEvents, setSortedEvents] = useState([]);

  useEffect(() => {
    const eventsCopy = [...events];
    if (sort === "likes-desc") {
      eventsCopy.sort((a, b) => b.likes - a.likes);
    } else if (sort === "likes-asc") {
      eventsCopy.sort((a, b) => a.likes - b.likes);
    } else if (sort === "date-desc") {
      eventsCopy.sort(
        (a, b) => new Date(b.fecha_evento) - new Date(a.fecha_evento)
      );
    } else if (sort === "date-asc") {
      eventsCopy.sort(
        (a, b) => new Date(a.fecha_evento) - new Date(b.fecha_evento)
      );
    } else if (sort === "price-desc") {
      eventsCopy.sort((a, b) => b.precio - a.precio);
    } else if (sort === "price-asc") {
      eventsCopy.sort((a, b) => a.precio - b.precio);
    }
    setSortedEvents(eventsCopy);
  }, [events, sort]);

  return sortedEvents;
}

export default useSortedEvents;
