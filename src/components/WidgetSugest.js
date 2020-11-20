import React, { useState } from "react";
import { Peticiones } from "../api/peticiones";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";
import { GenerarNombre_Dia } from "../utils/GenerarNombre_Dia";

export const WidgetSugest = () => {
  const [ResultData, setResultData] = useState([]);
  Peticiones(
    "https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7",
    "GET"
  ).then((result) => {
    setResultData([result.list[5]]);
  });

  return (
    <div id="widget-suggest">
      <h3>
      HEADQUATER<span> SUGGEST</span>
      </h3>
      <div className="content-widget-suggest">
        {ResultData[0] === undefined
          ? console.log("cargando")
          : ResultData.map((data,index) => {
              return (
                <div key={index} className="widget-card-suggest">
                  <div className="widget-card-suggest-header">
                    <div className="widget-headquarter">
                      <h3>CARTAGENA - CO</h3>
                    </div>
                    <div className="widget-icon">
                      <i
                        className={`wi wi-day-${data.weather[0].icon} icon-suggest`}
                      ></i>
                    </div>
                  </div>

                  <div className="widget-tiempo">
                    <p style={{ marginTop: "0" }} className="content-temp">
                      {ConversorTempKaC(data.main.temp)} °C
                    </p>
                  </div>
                  <div className="widget-card-suggest-footer">
                    <div className="detail-tiempo">
                      <i className="fas fa-circle icon-humidity"></i>
                      <span>{`${data.main.humidity}%`}</span>
                      <i className="fas fa-circle icon-speed"></i>
                      <span>{`${data.wind.speed}m/s`}</span>
                    </div>
                    <div className="widget-day">
                      <p> {GenerarNombre_Dia(data.date)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
