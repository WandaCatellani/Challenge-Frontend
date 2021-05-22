import React from "react";
import Table from "react-bootstrap/Table";

const WeatherTable = ({ weather }) => {
  let datos = datos.push(weather);

  console.log(datos);
  let weatherFilter = datos.filter((i) => i !== i[3]);

  console.log(weatherFilter);

  // let weatherKeys = Object.keys(weather);
  // let weatherValues = Object.values(weather);

  // let weatherKeysFinally = weatherKeys.filter((i) => i !== "weather_icons");
  // let weatherValuesFinally = weatherValues.filter(
  //   (i) =>
  //     i !==
  //     "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
  // );

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          {/* {weatherKeysFinally.map((w, i) => {
            return <th key={i}>{w}</th>;
          })} */}
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          {/* {weatherValuesFinally.map((w, i) => {
            return <td key={i}>{w}</td>;
          })} */}
        </tr>
      </tbody>
    </Table>

    /*    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {datos.map((w, index) => (
            <th key={index}>{w[4]}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((w, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((w, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((w, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table> */
  );
};

export default WeatherTable;
