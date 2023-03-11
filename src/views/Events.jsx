import React, { useState } from "react";
import useEventData from "../hooks/useEventData";

function Events() {
  const [sort, setSort] = useState("default");
  const events = useEventData();

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const sortedEvents = [...events];

  if (sort === "likes-desc") {
    sortedEvents.sort((a, b) => b.likes - a.likes);
  } else if (sort === "likes-asc") {
    sortedEvents.sort((a, b) => a.likes - b.likes);
  } else if (sort === "date-desc") {
    sortedEvents.sort(
      (a, b) => new Date(b.fecha_evento) - new Date(a.fecha_evento)
    );
  } else if (sort === "date-asc") {
    sortedEvents.sort(
      (a, b) => new Date(a.fecha_evento) - new Date(b.fecha_evento)
    );
  } else if (sort === "price-desc") {
    sortedEvents.sort((a, b) => b.precio - a.precio);
  } else if (sort === "price-asc") {
    sortedEvents.sort((a, b) => a.precio - b.precio);
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Eventos</h1>
      <div className="d-flex justify-content-end mb-3">
        <label htmlFor="sort-select" className="me-2">
          Ordenar por:
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={handleSortChange}
          className="form-select"
        >
          <option value="default">Por defecto</option>
          <option value="likes-desc">Más populares</option>
          <option value="likes-asc">Menos populares</option>
          <option value="date-desc">Más próximos</option>
          <option value="date-asc">Menos próximos</option>
          <option value="price-desc">Mayor precio</option>
          <option value="price-asc">Menor precio</option>
        </select>
      </div>
      {Array.isArray(sortedEvents) && sortedEvents.length > 0 ? (
        sortedEvents.map((event) => (
          <div key={event.id} className="row my-4">
            <div className="col-md-3">
              <img
                src={event.imagen_evento}
                alt={event.nombre_evento}
                className="img-fluid"
              />
            </div>
            <div className="col-md-9">
              <h2>{event.nombre_evento}</h2>
              <p>{event.descripcion}</p>
              <p className="mb-0">{event.likes} Likes</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No hay datos disponibles</p>
      )}
    </div>
  );
}

export default Events;
