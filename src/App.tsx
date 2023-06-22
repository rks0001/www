import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Allopathic from "./pages/Allopathic";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allopathic" element={<Allopathic />} />
        <Route path="/products" element={<Products />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
