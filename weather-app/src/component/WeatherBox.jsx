import React from "react";

const WeatherBox = ({ weather }) => {

  return (
    <div className="weather-box">
      <div>{weather && weather.name}</div>
      <h2>
        {weather?.main.temp} Degrees / Feels like {weather?.main.feels_like}
      </h2>
      <h2></h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};
export default WeatherBox;
