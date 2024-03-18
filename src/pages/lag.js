import React from 'react';
import '../styles/lag.css';
import bilde from '../assets/LagBilde.jpg';

function lag() {
  return (
    <div className='lag'>
      <img src={bilde} alt="Lagbilde" className='lag_bilde'/>
      <div className='lag_info'>   
        <div className='menu_options'>
          <button onClick={() => {""}}> Spillere </button>
          <button onClick={() => {""}}> Trenere </button>
          <button onClick={() => {""}}> Tabell </button>
          <button onClick={() => {""}}> Terminliste </button>
        </div>
      </div>
    </div>

  )
}

export default lag
