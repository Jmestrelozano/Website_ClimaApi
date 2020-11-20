import React, { useEffect, useState } from "react";
import { Peticiones } from "../api/peticiones";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";
export const WidgetHeader = () => {
  const [DataResult, setDataResult] = useState([]);
  const [Temp, setTemp] = useState([]);

  useEffect(() => {
    
  Peticiones(
      "https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582",
      "GET"
    ).then((result) => {
      setDataResult(result.places);
      setTemp(ConversorTempKaC(result.places[2].main.temp));
    });
  }, []);


  return (
    <>
      {DataResult[2] === undefined ? (
        console.log("cargando")
      ) : (
        <div id="widget-header">
          <div className="content-img">
            <img src={DataResult[2].image} alt={DataResult[2].name} />
          </div>
          <div className="content-text">
            <div className="widget-headquarter">
              <div className="etiqueta-sitio">
                <p className="content-icon">
                  {" "}
                  <i className="fas fa-map-marker-alt"></i> {DataResult[2].name}
                </p>
              </div>
              <p className="content-temp">{Temp}°C</p>
              <p className="content-parrafo">
                Good Morning,
                <br />
                <span>Condor!</span>
              </p>
            </div>
            <div className="widget-icon">
              <i className={`wi wi-day-${DataResult[2].weather[0].icon} icono`}></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
