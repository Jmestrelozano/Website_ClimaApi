import React, { useState } from "react";
import { Peticiones } from "../api/peticiones";


export const WidgetSities = () => {
  const [ResultData, setResultData] = useState([]);

  let arraySites = [];
  Peticiones(
    "https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07",
    "GET"
  ).then((result) => {
    arraySites.push(result.result[0], result.result[7], result.result[8]);
    setResultData(arraySites);
  });

  return (
    <div id="widget-sities">
      <h3>
        PLACE TO <span>VISIT</span>
      </h3>
      <div className="widget-sities-container">
        {ResultData === undefined
          ? console.log("cargando")
          : ResultData.map((data,index) => {
              return (
                <div key={index} className="widget-car">
                  <div className="widget-sities-img">
                    <img src={data.image} />
                  </div>
                  <div className="widget-sities-text">
                    <div className="widget-city-name">
                      <h3>{data.name}</h3>
                    </div>
                    <div className="btn-sities">
                      <a>VISIT PLACE</a>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};
