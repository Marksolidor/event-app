//App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import Register from "./components/Register";
import { Login } from "./components/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registrarse" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
