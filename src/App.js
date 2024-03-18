import "./App.css";
import React from 'react';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Terminliste from "./pages/terminliste";
import Resultater from "./pages/resultater";
import Lag from "./pages/lag";
import Spillere from "./pages/spillere";
import Trenere from "./pages/trenere";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/terminliste" element={<Terminliste/>} />
          <Route path="/resultater" element={<Resultater/>} />
          <Route path="/lag" element={<Lag/>} />
          <Route path="/spillere" element={<Spillere/>} />
          <Route path="/trenere" element={<Trenere/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;