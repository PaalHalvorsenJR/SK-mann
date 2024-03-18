import React from "react";
import "../styles/resultater.css";
import tableData from '../components/Table.json'

function resultater() {
    return (
      <div className='resultater'>
        <h1>Tabell</h1>
          <table>
            <thead>
              <tr>
                <th>Plass</th>
                <th>Lag</th>
                <th>Kamper</th>
                <th>Vunnet</th>
                <th>Uavgjort</th>
                <th>Tap</th>
                <th>Mål</th>
                <th>Diff</th>
                <th>Poeng</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((team, index) => (
                <tr key={index}>
                  <td>{team.Plass.trim()}</td>
                  <td>{team.Lag}</td>
                  <td>{team.Kamper}</td>
                  <td>{team.Vunnet}</td>
                  <td>{team.Uavgjort}</td>
                  <td>{team.Tap}</td>
                  <td>{team.Mål}</td>
                  <td>{team.Diff}</td>
                  <td>{team.Poeng}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    )
  }

export default resultater;
  