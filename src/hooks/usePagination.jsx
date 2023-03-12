import { useState, useEffect } from "react";

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [pageSize, setPageSize] = useState(itemsPerPage); // Number of items per page

  // Reset current page when itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [items, pageSize]);

  const pageCount = Math.ceil(items.length / pageSize); // Total number of pages
  const visibleItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  ); // Items to display on the current page

  // Change the current page number
  function handlePageChange(page) {
    setCurrentPage(page);
  }

  // Change the number of items per page
  function handlePageSizeChange(event) {
    const newSize = parseInt(event.target.value);
    if (!isNaN(newSize) && newSize > 0) {
      setPageSize(newSize);
    }
  }

  // Return an object with pagination-related values and functions
  return {
    pageSize,
    currentPage,
    pageCount,
    handlePageSizeChange,
    handlePageChange,
    visibleItems,
  };
}

export default usePagination;
