import React from "react";

function SortDropdown({ value, onChange }) {
  return (
    <div className="input-group mb-3">
      <label htmlFor="sort-select" className="input-group-text">
        Ordenar por:
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={onChange}
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
  );
}

export default SortDropdown;
