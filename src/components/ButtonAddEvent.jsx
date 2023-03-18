import React from "react";
import { useState } from "react";
import './styleButtonAddEvent.css';


function ButtonAddEvent() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowSuccessMessage(true);
  };



  return (
    <>
      {showSuccessMessage && (
        <div>Evento agregado con éxito</div>
      )}
      <div onSubmit={handleSubmit}>
        <div type="text" value={formData} onChange={(e) => setFormData(e.target.value)} />
        <button className="btn-custom" onClick={handleSubmit}>
          Agregar Evento
        </button>
      </div>
    </>
  );
};
export default ButtonAddEvent;
