import { useState } from 'react';
import axios from 'axios';

function CrearEvento() {
  const [nombreEvento, setNombreEvento] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [tipoEvento, setTipoEvento] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenEvento, setImagenEvento] = useState(null);
  const [direccion, setDireccion] = useState('');
  const [comuna, setComuna] = useState('');
  const [referencia, setReferencia] = useState('');
  const [precio, setPrecio] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('imagen_evento', imagenEvento);
    axios.post('https://eventapp-backend-production.up.railway.app/events', formData)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>Crear evento</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre_evento" className="form-label">Nombre del evento</label>
          <input type="text" className="form-control" id="nombre_evento" name="nombre_evento" value={nombreEvento} onChange={event => setNombreEvento(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha del evento</label>
          <input type="date" className="form-control" id="fecha" name="fecha" value={fecha} onChange={event => setFecha(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="hora" className="form-label">Hora del evento</label>
          <input type="time" className="form-control" id="hora" name="hora" value={hora} onChange={event => setHora(event.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="tipo_evento" className="form-label">Tipo de evento</label>
          <select className="form-select" id="tipo_evento" name="tipo_evento" value={tipoEvento} onChange={event => setTipoEvento(event.target.value)} required>
            <option value="">Seleccionar</option>
            <option value="concierto">Concierto</option>
            <option value="teatro">Teatro</option>
            <option value="deportivo">Deportivo</option>
            <option value="cultural">Cultural</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción del evento</label>
          <textarea className="form-control" id="descripcion" name="descripcion" value={descripcion} onChange={event => setDescripcion(event.target.value)} rows="3"></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="imagen_evento" className="form-label">Imagen del evento</label>
          <input type="file" className="form-control" id="imagen_evento" 
          name="imagen_evento" accept="image/*" onChange={event => setImagenEvento(event.target.files[0])} />
          </div>
          <div className="mb-3">
            <label htmlFor="direccion" className="form-label">Dirección del evento</label>
            <input type="text" className="form-control" id="direccion" name="direccion" value={direccion} onChange={event => setDireccion(event.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="comuna" className="form-label">Comuna</label>
            <input type="text" className="form-control" id="comuna" name="comuna" value={comuna} onChange={event => setComuna(event.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="referencia" className="form-label">Referencia de ubicación</label>
            <input type="text" className="form-control" id="referencia" name="referencia" value={referencia} onChange={event => setReferencia(event.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="precio" className="form-label">Precio del evento</label>
            <input type="number" className="form-control" id="precio" name="precio" value={precio} onChange={event => setPrecio(event.target.value)} required />
          </div>
          <button type="submit" className="btn btn-primary">Crear evento</button>
        </form>
      </div>
      );
    }
    
    export default CrearEvento;