import React, { useState } from "react";
import useEventData from "../hooks/useEventData";
import SortDropdown from "../components/SortDropdown";
import useSortedEvents from "../hooks/useSortedEvents";
import usePagination from "../hooks/usePagination";
import Pagination from "../components/Pagination";
import PageSizeDropdown from "../components/PageSize";
import EventList from "../components/EventList";

function Events() {
  const [sort, setSort] = useState("default");
  const [searchValue, setSearchValue] = useState("");
  const events = useEventData();
  const sortedEvents = useSortedEvents(events, sort);

  const {
    pageSize,
    currentPage,
    pageCount,
    handlePageSizeChange,
    handlePageChange,
    visibleItems: visibleEvents,
  } = usePagination(
    sortedEvents.filter(
      (event) =>
        event.nombre_evento.toLowerCase().includes(searchValue.toLowerCase()) ||
        event.tipo_evento.toLowerCase().includes(searchValue.toLowerCase()) ||
        event.comuna.toLowerCase().includes(searchValue.toLowerCase()) ||
        event.region.toLowerCase().includes(searchValue.toLowerCase())
    ),
    5
  );

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Eventos</h1>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="d-flex align-items-center">
          <SortDropdown value={sort} onChange={handleSortChange} />
          <PageSizeDropdown value={pageSize} onChange={handlePageSizeChange} />
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control mr-2"
            placeholder="Buscar evento..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
      {events.length === 0 ? (
        <p className="text-center">Cargando eventos...</p>
      ) : (
        <EventList events={visibleEvents} />
      )}
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}

export default Events;
