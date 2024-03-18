import React from "react";
import "../styles/spillere.css";
import playerData from "../components/spillerInfo.json";
import _default from "../assets/default.jpg";

function spillere() {
    return (
        <div className="players_container">
            <h1 className="players">Spillere</h1>
            <div className="player_grid">
                {playerData.map((player, index) => (
                    <div key={index} className="player_card">
                        <img src={_default} alt="Spiller" className="player_image" />
                        <div className="player_info">
                            <h2>{player.Navn}</h2>
                            <p>Kamper: {player.Kamper}</p>
                            <p>Mål: {player.Mål}</p>
                            <p>Gule Kort: {player.Gule_kort}</p>
                            <p>Røde kort: {player.Røde_kort}</p>
                        </div>
                    </div>
                ))}         
            </div>
        </div>
    );
}

export default spillere;