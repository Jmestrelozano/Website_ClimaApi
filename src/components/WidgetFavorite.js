import React, { useState ,useEffect} from "react";
import { Peticiones } from "../api/peticiones";
import { ConversorTempKaC } from "../utils/ConversorTemperatura";

export const WidgetFavorite = () => {
  const [ResultData, setResultData] = useState([]);
  let arrayPronostico = [];
  useEffect(() => {
   Peticiones(
    "https://run.mocky.io/v3/818d0158-727b-461e-9f76-06734ed7e582",
    "GET"
  ).then((result) => {
    arrayPronostico.push(result.places[0], result.places[1]);
    setResultData(arrayPronostico);
  });
  }, [setResultData,arrayPronostico])
  

  return (
    <div id="widget-favorite">
      <h3>
        OUR FAVORITE <span>PLACES</span>
      </h3>{" "}
      <div className="content-widget-card">
        {ResultData === undefined
          ? console.log("cargando")
          : ResultData.map((data,index) => {

              return (
                <div  key={index}className="widget-card">
                  <div className="widget-card-img">
                    <img src={data.image} alt="image"/>
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
