import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allopathic from "./pages/Allopathic";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allopathic" element={<Allopathic />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
