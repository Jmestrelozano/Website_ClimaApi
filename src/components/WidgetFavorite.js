import React from "react";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";

export const WidgetFavorite = () => {
  let arrayFavorite = [];

  let resultado = JSON.parse(localStorage.getItem("Places")).places;
  arrayFavorite.push(resultado[0], resultado[1]);
  
  return (
    <div id="widget-favorite">
      <h3>
        OUR FAVORITE <span>PLACES</span>
      </h3>{" "}
      <div className="content-widget-card">
        {arrayFavorite.map((data, index) => {
          return (
            <div key={index} className="widget-card">
              <div className="widget-card-img">
                <img src={data.image} alt="image" />
              </div>
              <div className="widget-card-text">
                <h5 className="widget-headquarter-name">{data.name}</h5>
                <p>{data.description}</p>
                <div className="widget-card-text-footer">
                  <i className="fas fa-circle icon-temp"></i>
                  <span>{ConversorTempKaC(data.main.temp)}°C</span>
                  <i className="fas fa-circle icon-humidity"></i>
                  <span>{`${data.main.humidity}%`}</span>
                  <i className="fas fa-circle icon-speed"></i>
                  <span>{`${data.wind.speed}m/s`}</span>
                </div>
              </div>
              <div className="widget-icon">
                <i
                  className={`wi wi-day-${data.weather[0].icon} icon-favorite`}
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
