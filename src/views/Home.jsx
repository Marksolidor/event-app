import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UpCommingEvents from "../components/Upcomming_Events";
import TopEvents from "../components/Top_Events";
import useEventData from "../hooks/useEventData";
import './styleHome.css';
import audioFile from '../assets/public_Memories.mp3';

function Home() {
  // Use custom hook to get event data
  const events = useEventData();

  const [audio] = useState(new Audio(audioFile));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);
    }
  }, [audio, isPlaying]);

  return (
      
    <div className="container">
      <h1 className="bienvenido text-center my-4">Bienvenido a EventAPP</h1>
      <div className="contenedor1">
      
        <p className="text-center">
          <img src="https://cdn-icons-png.flaticon.com/512/4388/4388285.png" alt="Calendario" width="30" height="30" className="d-inline-block align-text-top"/>
        Evento es una aplicación web que te permite crear eventos y compartirlos
        con tus amigos.
      </p>
      </div>
      <p className="text-center"> <img src="https://cdn-icons-png.flaticon.com/512/8257/8257414.png" alt="Map" width="30" height="30" className="d-inline-block align-text-top"/>
        También puedes descubrir eventos que se están realizando en tu ciudad.
      </p>
      <p className="text-center"> <img src="https://cdn-icons-png.flaticon.com/512/2654/2654416.png" alt="Register" width="30" height="30" className="d-inline-block align-text-top"/>
        ¡Regístrate y comienza a crear y descubrir eventos!
      </p>
      <p className="text-center">
  <Link to="/events" className="btn btn-custom">
    <i className="fas fa-calendar-alt"></i> Ver Eventos
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

export default Home
