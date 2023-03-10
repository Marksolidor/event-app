import React from "react";
import { Link } from "react-router-dom";
import UpCommingEvents from "../components/Upcomming_Events";
import TopEvents from "../components/Top_Events";
import useEventData from "../hooks/useEventData";

function Home() {
  // Use custom hook to get event data
  const events = useEventData();

  return (
    <div className="container">
      <h1 className="text-center my-4">Bienvenido a Evento</h1>
      <p className="text-center">
        Evento es una aplicación web que te permite crear eventos y compartirlos
        con tus amigos.
      </p>
      <p className="text-center">
        También puedes descubrir eventos que se están realizando en tu ciudad.
      </p>
      <p className="text-center">
        ¡Regístrate y comienza a crear y descubrir eventos!
      </p>
      <p className="text-center">
        <Link to="/events" className="btn btn-primary">
          Ver Eventos
        </Link>
      </p>
      <h1 className="text-center my-4">Proximos Eventos</h1>
      <div className="row">
        {Array.isArray(events) && events.length > 0 ? (
          <UpCommingEvents events={events} />
        ) : (
          <p className="text-center">No hay datos disponibles</p>
        )}
      </div>
      <h1 className="text-center my-4">Eventos Populares</h1>
      <div className="row">
        {Array.isArray(events) && events.length > 0 ? (
          <TopEvents events={events} />
        ) : (
          <p className="text-center">No hay datos disponibles</p>
        )}
      </div>
    </div>
  );
}

export default Home;
