import React from "react";

function PageSizeDropdown({ value, onChange }) {
  return (
    <div className="input-group mb-3">
      <label htmlFor="page-size-select" className="input-group-text">
        Mostrar:
      </label>
      <select
        id="page-size-select"
        value={value}
        onChange={onChange}
        className="form-select"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
      </select>
    </div>
  );
}

export default PageSizeDropdown;
