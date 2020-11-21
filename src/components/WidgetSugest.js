import React from "react"
import { ConversorTempKaC } from "../utils/ConversorTemperatura";
import { GenerarNombre_Dia } from "../utils/GenerarNombre_Dia";

export const WidgetSugest = () => {
  let resultado = JSON.parse(localStorage.getItem("List")).list[5];

  return (
    <div id="widget-suggest">
      <h3>
        HEADQUATER<span> SUGGEST</span>
      </h3>
      <div className="content-widget-suggest">
        <div className="widget-card-suggest">
          <div className="widget-card-suggest-header">
            <div className="widget-headquarter">
              <h3>CARTAGENA - CO</h3>
            </div>
            <div className="widget-icon">
              <i
                className={`wi wi-day-${resultado.weather[0].icon} icon-suggest`}
              ></i>
            </div>
          </div>

          <div className="widget-tiempo">
            <p style={{ marginTop: "0" }} className="content-temp">
              {ConversorTempKaC(resultado.main.temp)} °C
            </p>
          </div>
          <div className="widget-card-suggest-footer">
            <div className="detail-tiempo">
              <i className="fas fa-circle icon-humidity"></i>
              <span>{`${resultado.main.humidity}%`}</span>
              <i className="fas fa-circle icon-speed"></i>
              <span>{`${resultado.wind.speed}m/s`}</span>
            </div>
            <div className="widget-day">
              <p> {GenerarNombre_Dia(resultado.date)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
