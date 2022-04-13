import React, { useEffect, useState } from "react";
import { v4 as uid } from "uuid";

import weatherSearch from "./apiFetch";

const Forecast = () => {
  const [data, setData] = useState([]);

  // Fetching Data
  useEffect(() => {
    weatherSearch().then((res) => {
      setData([{ ...res }]);
    });
  }, []);

  return data.map((item) => {
    // console.log(item);
    return (
      <div key={uid} className="forecast">
        <div className="details">
          <div>day</div>
          <div>{item.daily[0].temp.day} °C</div>
        </div>
        <div className="details">
          <div key={item.lon}>eve</div>
          <div key={uid}>{item.daily[0].temp.eve} °C</div>
        </div>
        <div className="details">
          <div key={item.lon}>night</div>
          <div key={uid}>{item.daily[0].temp.night} °C</div>
        </div>
        <div className="details" style={{ color: "blue" }}>
          <div key={item.lon}>min</div>
          <div key={uid}>{item.daily[0].temp.min} °C</div>
        </div>
        <div className="details" style={{ color: "orangered" }}>
          <div key={item.lon}>max</div>
          <div key={uid}>{item.daily[0].temp.max} °C</div>
        </div>
      </div>
    );
  });
};
export default Forecast;
