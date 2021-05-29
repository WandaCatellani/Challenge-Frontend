import React from "react";
import Table from "react-bootstrap/Table";
import "./WeatherTable.scss";

const WeatherTable = ({ weather }) => {
  let { weather_icons, ...weatherObject } = weather;

  let weatherKeys = Object.keys(weatherObject);
  let weatherValues = Object.values(weatherObject);

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
