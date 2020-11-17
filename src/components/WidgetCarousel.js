import React, { useEffect, useState } from "react";
import { peticiones } from "../api/peticiones";
import { GenerarNombre_Dia } from "../utils/GenerarNombre_Dia";

export const WidgetCarousel = () => {
  const [ListDays, setListDays] = useState([]);
  const [DiaDate, setDiaDate] = useState([]);

  useEffect(() => {
    peticiones(
      "https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7",
      "GET"
    ).then((result) => {
      setListDays(result.list);
      setDiaDate(GenerarNombre_Dia(result.list));
    });
  }, []);

  return (
    <>
      <div id="widget-carousel">
        <div className="widget-carousel-header">
          <h3>Forecast Extended</h3>

          <div className="button-slide">
            <button>
              <i className="wi wi-direction-left"></i>
            </button>
            <button>
              <i className="wi wi-direction-right"></i>
            </button>
          </div>
        </div>

        <div className="content-carousel-item contened">
          {ListDays === undefined
            ? console.log("cargando")
            : ListDays.map((data, index) => {
                return (
                  <div key={index} className="widget-carousel-item">
                    <div className="widget-day">
                      <h3>{}</h3>
                    </div>
                    <div>
                      <div>
                        <p>{data.main.temp}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};
