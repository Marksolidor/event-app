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
  const events = useEventData();
  const sortedEvents = useSortedEvents(events, sort);

  const {
    pageSize,
    currentPage,
    pageCount,
    handlePageSizeChange,
    handlePageChange,
    visibleItems: visibleEvents,
  } = usePagination(sortedEvents, 5);

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Eventos</h1>
      <div className="d-flex justify-content-between align-items-center my-3">
        <div>
          <SortDropdown value={sort} onChange={handleSortChange} />
        </div>
        <div className="d-flex align-items-center">
          <label htmlFor="pageSize" className="me-2">
            Mostrar:
          </label>
          <PageSizeDropdown value={pageSize} onChange={handlePageSizeChange} />
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
