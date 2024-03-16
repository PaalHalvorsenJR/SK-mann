import React from 'react';
import '../styles/terminliste.css';
import kampData from '../components/kampData'; // Ensure the file name matches exactly
import skMannLogo from '../assets/SkMann1.png';
import gneistLogo from '../assets/Gneist1.png';
import nordhordlandLogo from '../assets/NordHordaland1.png';
import radoyLogo from '../assets/radoy1.png';
import tertnesLogo from '../assets/Tertnes1.png';
import arnaLogo from '../assets/arna.png';
import kvernbitLogo from '../assets/kvernbit.png';
import bergkrystallLogo from '../assets/Ørn_Horten.png';
import flaktveitLogo from '../assets/flaktveit.png';
import hausvikLogo from '../assets/hausvik.png';

const teamLogos = {
  'Mann': skMannLogo,
  'Gneist 2': gneistLogo,
  'Nordhordland 2': nordhordlandLogo,
  'Radøy FK 2': radoyLogo,
  'Tertnes 2': tertnesLogo,
  'Arna-Bjørnar 2': arnaLogo,
  'Kvernbit 2': kvernbitLogo,
  'Bergkrystall/Ørnen 2': bergkrystallLogo,
  'Flaktveit 2': flaktveitLogo,
  'Hausvik': hausvikLogo,
};

function Terminliste() {
  const today = new Date();

  // Find the next game
  const nextGame = kampData
    .map(kamp => ({
      ...kamp,
      dato: new Date(kamp.dato.split('.').reverse().join('-') + 'T' + kamp.tid),
    }))
    .filter(kamp => kamp.dato > today)
    .sort((a, b) => a.dato - b.dato)[0];
  
  console.log("nextGame", nextGame);

  return (
    <div className="terminliste">
      <h1>Neste kamp</h1>
      {nextGame ? (
        <div className="nextMatch">
          <div className="kamp__detaljer">
            <div className="kamp__dato-tid">
              <span className="kamp__dato">{nextGame.dato.toLocaleDateString()}</span>
              <span className="kamp__tid"> kl: {nextGame.tid}</span>
            </div>
            <div className="kamp__oppgjør">
              <span className="kamp__hjemme">{nextGame.hjemme}</span>
              <span className="bindstrek">-</span>
              <span className="kamp__borte">{nextGame.borte}</span>
            </div>
            <div className="kamp__sted">{nextGame.sted}</div>
          </div>
          <div className="kamp__logo">
            <img className="kamp__logo__hjemme" src={teamLogos[nextGame.hjemme]} alt={nextGame.hjemme} />
            <img className="kamp__logo__borte" src={teamLogos[nextGame.borte]} alt={nextGame.borte} />
          </div>
        </div>
      ) : (
        <p>Ingen flere kamper denne sesongen</p>
      )}
      
      <h1>Terminliste</h1>
      <div className="terminliste__container">
        {kampData.map((kamp, index) => (
          <div key={index} className="kamp">
            <div className="kamp__index">#{index + 1}</div>
            <div className="kamp__detaljer">
              <div className="kamp__dato-tid">
                <span className="kamp__dato">{kamp.dato}</span>
                <span className="kamp__tid"> kl: {kamp.tid}</span>
              </div>
              <div className="kamp__oppgjør">
                <span className="kamp__hjemme">{kamp.hjemme}</span>
                <span className="bindstrek">-</span>
                <span className="kamp__borte">{kamp.borte}</span>
              </div>
              <div className="kamp__sted">{kamp.sted}</div>
            </div>
            <div className="kamp__logo">
              <img className="kamp__logo__hjemme" src={teamLogos[kamp.hjemme]} alt={kamp.hjemme} />
              <img className="kamp__logo__borte" src={teamLogos[kamp.borte]} alt={kamp.borte} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Terminliste;
