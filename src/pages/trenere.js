import React from "react";
import "../styles/trenere.css";
import trenerInfo from "../components/trenerInfo";
import Joakim from "../assets/JoakimBirkeland.jpg";
import Brage from "../assets/BrageEliassen.jpg";
import Paal from "../assets/paalhalvorsen.jpg";

function trenere() {
    return (
        <div className="trenere_container">
            <h1 className="trenere">Støtteapparat</h1>
            <div className="trenere_grid">
                {trenerInfo.map((coach, index) => (
                    <div key={index} className="trenere_card">
                        <img src={(coach.navn === "Brage Eliassen" ? Brage : coach.navn === "Joakim Birkeland" ? Joakim : Paal)} alt="Trener" className="trenere_image"/>
                        <div className="trener_info">
                            <h2>{coach.navn}</h2>
                            <p>Stilling: {coach.rolle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );}

export default trenere;