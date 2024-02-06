import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "../src/home/home";
import Leistungen from "./pages/leistungen/Leistungen";
import Impressium from "./pages/impressium/Impressium";
import Kontakt from "./pages/kontakt/Kontakt";
// import Header from "./header/header";
// import Footer from "./footer/footer";
import Footer from "./footer/footer";
import Home from "./home/Home";
import Header from "./header/Header";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leistungen" element={<Leistungen />} />
        <Route path="/impressium" element={<Impressium />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
