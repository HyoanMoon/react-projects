import React, { useState } from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity }) => {
  return (
    <div>
      <Button className="my-btn" variant="warning" onClick={() => setCity("")}>
        Current Location
      </Button>
      {cities.map((item, key) => (
        <Button variant="warning" index={key} onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
