import React from "react";

function Pagination({ currentPage, pageCount, handlePageChange }) {
  return (
    <nav>
      <ul className="pagination">
        {Array.from({ length: pageCount }, (_, i) => i + 1).map((page) => (
          <li
            key={page}
            className={`page-item ${page === currentPage ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
