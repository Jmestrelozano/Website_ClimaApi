import React from "react";
import { Peticiones } from "../api/peticiones";

export const WidgetSities = () => {
  let arraySites = [];

  let resultado = Peticiones(
    "https://run.mocky.io/v3/f8926877-849a-416f-8226-9fd9d9fc5e07",
    "Sites"
  );
  arraySites.push(
    resultado.result[0],
    resultado.result[7],
    resultado.result[8]
  );

  return (
    <div id="widget-sities">
      <h3>
        PLACE TO <span>VISIT</span>
      </h3>
      <div className="widget-sities-container">
        {arraySites.map((data, index) => {
          return (
            <div key={index} className="widget-car">
              <div className="widget-sities-img">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="widget-sities-text">
                <div className="widget-city-name">
                  <h3>{data.name}</h3>
                </div>
                <div className="btn-sities">
                  <a href="https://condorlabs.io/" target="blank">
                    VISIT PLACE
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
