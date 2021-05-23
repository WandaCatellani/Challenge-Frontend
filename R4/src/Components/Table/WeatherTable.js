import React from "react";
import Table from "react-bootstrap/Table";
import "./WeatherTable.scss";

const WeatherTable = ({ weather }) => {
  delete weather.weather_icons;

  let weatherKeys = Object.keys(weather);
  let weatherValues = Object.values(weather);

  return (
    <section className="weatherTable">
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>#</th>
            {weatherKeys.map((w, i) => {
              return <th key={i}>{w}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {weatherValues.map((w, i) => {
              return <td key={i}>{w}</td>;
            })}
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default WeatherTable;
