import React from "react";

function PageSizeDropdown({ value, onChange }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle me-2"
        type="button"
        id="pageSizeDropdown"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Mostrar: {value}
      </button>
      <ul className="dropdown-menu" aria-labelledby="pageSizeDropdown">
        <li>
          <button className="dropdown-item" onClick={() => onChange(5)}>
            5
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onChange(10)}>
            10
          </button>
        </li>
        <li>
          <button className="dropdown-item" onClick={() => onChange(15)}>
            15
          </button>
        </li>
      </ul>
    </div>
  );
}

export default PageSizeDropdown;
