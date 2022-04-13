import React, { useEffect, useState } from "react";
import { v4 as uid } from "uuid";

import "../main.scss";
// import weather from "./data";
import weatherSearch from "./apiFetch";

const WeatherUi = ({ loading, loaded }) => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const [timeZone, setTimezone] = useState(0);

  // Using Fetched Data
  useEffect(() => {
    weatherSearch().then((res) => {
      setSpinner(false);
      setData([{ ...res, spinner }]);
      setTimezone(time);
    });
  }, [spinner]);

  // getting date / Keeping seconds updated
  useEffect(() => {
    setTimeout(() => {
      setTimezone(time);
    }, 1000);
  });

  let today = new Date();
  let date =
    today.toLocaleString("en-US", {
      weekday: "long",
    }) +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    today.getFullYear();
  let time =
    today.getHours() +
    ":" +
    today.getMinutes() +
    ":" +
    today
      .getSeconds()

      .toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });

  //  Rendering Data

  return data.map((item) => {
    // console.log(item);

    return item.spinner ? (
      <div key={uid}>
        <div className="spinner-grow text-warning" role="status">
          <h1 className="loading">Loading..</h1>
        </div>
        <h1 className="title">Requires location access!</h1>
      </div>
    ) : (
      <div key={uid} className="main">
        <div className="city title">
          <h1 className="time">{timeZone}</h1>
          <h4 className="date">{date}</h4>
        </div>
        <div className="widget">
          <img
            src={`images/${item.current.weather[0].main}.png`}
            className="widget-img"
            alt="sunny"
          ></img>
          <h1 className="description">
            {item.current.weather[0].description}
           
          </h1>
        </div>
        <div className="data city title">
          <h1 className="time">{item.current.temp} °C</h1>
        </div>
      </div>
    );
  });
};

export default WeatherUi;
