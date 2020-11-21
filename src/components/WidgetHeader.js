import React, { useEffect } from "react";
import { Peticiones } from "../api/peticiones";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";
export const WidgetHeader = () => {

  let resultado = Peticiones(
    "https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582","Places"
  );

  return (
    <>
      <div id="widget-header">
        <div className="content-img">
          <img src={resultado.places[2].image} alt={resultado.places[2].name} />
        </div>
        <div className="content-text">
          <div className="widget-headquarter">
            <div className="etiqueta-sitio">
              <p className="content-icon">
                {" "}
                <i className="fas fa-map-marker-alt"></i>{" "}
                {resultado.places[2].name}
              </p>
            </div>
            <p className="content-temp">
              {ConversorTempKaC(resultado.places[2].main.temp)}°C
            </p>
            <p className="content-parrafo">
              Good Morning,
              <br />
              <span>Condor!</span>
            </p>
          </div>
          <div className="widget-icon">
            <i
              className={`wi wi-day-${resultado.places[2].weather[0].icon} icono`}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
};
