import "./App.css";
import React from 'react';
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Terminliste from "./pages/terminliste";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/terminliste" element={<Terminliste/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;