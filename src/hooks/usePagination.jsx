import { useState, useEffect } from "react";

function usePagination(items, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [items, pageSize]);

  const pageCount = Math.ceil(items.length / pageSize);
  const visibleItems = items.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function handlePageChange(page) {
    setCurrentPage(page);
  }

  function handlePageSizeChange(event, size) {
    const newSize = parseInt(size);
    setPageSize(newSize);
  }

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
