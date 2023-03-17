import React, { useState } from "react";

function FormularyComment({ onCommentSubmit }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCommentSubmit({ name, comment });
    setName("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="comment" className="form-label">
          Comentario
        </label>
        <textarea
          className="form-control"
          id="comment"
          rows="3"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Agregar comentario
      </button>
    </form>
  );
}

export default FormularyComment;
