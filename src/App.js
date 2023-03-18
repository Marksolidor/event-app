//App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Register from "./views/Register";
import Login from "./views/Login";
import Events from "./views/Events";
import CrearEvento from "./views/CrearEvento";
import EventDetail from "./views/EventDetail";
import Menu from "./views/Menu";
import "./components/Style/style.css";
import FavoriteEvents from "./views/Favorites";
import EditProfile from "./views/ModifyUser";
import Error404 from "./views/NotFound";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crearevento" element={<CrearEvento />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Favorites" component={FavoriteEvents} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<EditProfile />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;