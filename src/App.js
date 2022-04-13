import React from "react";
import "./main.scss";

import WeatherUi from "./components/WeatherUi";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <>
      <section className="container text-center">
        <h1 className="title">Weather App</h1>
        <WeatherUi />
        <Forecast />
      </section>
    </>
  );
};

export default App;
