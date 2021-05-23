import React, { useState, useEffect } from "react";
import $ from "jquery";
import WeatherTable from "../Table/WeatherTable";

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  const access_key = "f5acc145c818947efe97ca1841569470";
  const query = "New York";

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      getApi();
    }, 1000);
  }, []);

  const getApi = () => {
    let url =
      "http://api.weatherstack.com/current?access_key=" +
      access_key +
      "&query=" +
      query;

    setLoading(true);

    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setWeather(response.current);
        setLoading(false);
      });
  };

  return <>{loading ? <h1>Loading</h1> : <WeatherTable weather={weather} />}</>;
};

export default Weather;
