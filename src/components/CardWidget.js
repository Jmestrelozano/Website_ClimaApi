import React from "react";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";
import { GenerarNombre_Dia } from "../utils/GenerarNombre_Dia";

export const CardWidget = ({ posts }) => {
  return (
    <>
      {posts === undefined
        ? console.log("cargando")
        : posts.map((data, index) => {
            
            return (
              <div key={index} className="widget-carousel-item">
                <div className="widget-day">
            <h3>{GenerarNombre_Dia(data.date)}</h3>
                </div>
                <div>
                  <div className="widget-carousel-temp">
                    <p>{ConversorTempKaC(data.main.temp)} °C</p>
                  </div>
                  <div className="widget-carousel-footer">
                    <div>
                      <i className="fas fa-circle icon-humidity"></i>
                      <span>{`${data.main.humidity}%`}</span>
                    </div>

                    <div>
                      <i className="fas fa-circle icon-speed"></i>
                      <span>{`${data.wind.speed}m/s`}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
};
