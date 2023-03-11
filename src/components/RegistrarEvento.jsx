import React, { useState, useEffect } from 'react'


export const RegistrarEvento = () => {

  const obtenerRegistrosEvento = () => {
    var datos = localStorage.getItem("registroslogin");
    if(datos){
      return JSON.parse(datos);
    }else{
      return [];
    }
  }


  const [registroslogin, setRegistrosLogin] = useState(obtenerRegistrosEvento());

  const [titulo, setTitulo] = useState("");
  const [estilo, setEstilo] = useState("");
  const [tecnica, setTecnica] = useState("");
  const [precio, setPrecio] = useState("");


  const botonGuardar = (e) => {
    e.preventDefault();
    var miObjeto = { titulo, estilo, tecnica, precio }
    setRegistrosLogin([...registroslogin, miObjeto]);
    limpiarFormulario();
  }


  useEffect(() => {
    localStorage.setItem("registroslogin", JSON.stringify(registroslogin))
  }, [registroslogin] );



  const limpiarFormulario = () => {
    setTitulo("");
    setEstilo("");
    setTecnica("");
    setPrecio("");
    document.getElementById("miFormulario").reset();
  }


  return (
    

    <div className="bg-light" style={{marginTop:20, padding:20}}>

    <div className="h3">
      Añade un evento
      <br/>
      <form id="miFormulario" onSubmit={ botonGuardar } >
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="text" placeholder="Nombre del Evento"  onChange={(e) => setTitulo(e.target.value)}  required  />
          </div>

          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setEstilo(e.target.value)}  required  >
              <option value="">Seleccione el tipo de Evento</option>
              <option value="Eventos de empresa y corporativos">Eventos de empresa y corporativos</option>
              <option value="Eventos con causa y de recaudación de fondos">Eventos con causa y de recaudación de fondos</option>
              <option value="Espectáculos y eventos de ocio">Espectáculos y eventos de ocio</option>
              <option value="Eventos deportivos">Eventos deportivos</option>
              <option value="Evento Político">Evento Político</option>
                <option value="Eventos sociales">Eventos sociales</option>
                <option value="Evento Musical">Evento Musical</option>
                <option value="Evento Gastronómico">Evento Gastronómico</option>
                <option value="Evento Científico">Evento Científico</option>
                <option value="Evento de Arte">Evento de Arte</option>
                <option value="Evento de Comercio">Evento de Comercio</option>
                <option value="Evento de Comedia">Evento de Comedia</option>
                <option value="Evento Infantil">Evento Infantil</option>
                <option value="Evento al Aire Libre">Evento al Aire Libre</option>
                <option value="Evento para Adultos">Evento para Adultos</option>
                <option value="Fiesta">Fiesta</option>
                <option value="Reuniones o convenciones">Reuniones o convenciones</option>        
              <option value="Otro">Otro</option>
            </select>
          </div>
        </div>
        
        <div className="row" style={{marginTop:20}}>
          <div className="col-6">
            <select className="form-select form-select-lg text-center"  onChange={(e) => setTecnica(e.target.value)}  required  >
              <option value="">Indique el tamaño del Evento</option>
              <option value="Evento pequeño (entre 50 y 250 participantes)">Evento pequeño (entre 50 y 250 participantes)</option>
              <option value="Evento mediano (entre 250 y 500)">Evento mediano (entre 250 y 500)</option>
                <option value="Gran evento (entre los 500 y hasta 2.000 participantes)">Gran evento (entre los 500 y hasta 2.000 participantes)</option>
                <option value="Mega eventos (más de 2.000 participantes)">Mega eventos (más de 2.000 participantes)</option>
                <option value="Mini eventos (entre 35 y 45 participantes)">Mini eventos (entre 35 y 45 participantes)</option>
            </select>
          </div>
          <div className="col-6">
            <input className="form-control form-control-lg text-center" type="number" min="0" max="100000000" placeholder="Valor del Evento"  onChange={(e) => setPrecio(e.target.value)}  required  />
          </div>
          </div>
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
          <label class="form-check-label" for="flexCheckDefault">
            Evento Gratuito
          </label>
            </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Link de pago" required  />
          </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Descripción del Evento" required  />
          </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Fecha del Evento" required  />
          </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Ubicación del Evento" required  />
          </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Edad Promedio" required  />
          </div>
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">Cargar imágenes del evento</label>
              <input class="form-control" type="file" id="formFileMultiple" multiple></input>
          </div>
          <div>
            <input className="form-control form-control-lg text-center" type="text" placeholder="Ingresar link Redes Sociales" required  />
          </div>
          
        <div className="row" style={{marginTop:20}}>
          <div className="col">
            <button className="btn btn-primary btn-lg">Guardar Evento</button>
          </div>
        </div>
      </form>
    </div>
            
      </div>
  




  )
}
