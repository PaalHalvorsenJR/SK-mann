import React from 'react';
import '../styles/lag.css';
import bilde from '../assets/LagBilde.jpg';
import { Link } from 'react-router-dom';

function lag() {
  return (
    <div className='lag'>
      <img src={bilde} alt="Lagbilde" className='lag_bilde'/>
      <div className='lag_info'>   
        <div className='menu_options'>
          <Link to="/spillere">
            <button> Spillere</button>
          </Link>
          <Link to="/trenere">
            <button> Støtteapparat </button>
          </Link>
          <Link to="/resultater">
            <button> Tabell </button>
          </Link>
          <Link to="/terminliste">
            <button> Terminliste </button>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default lag
