import React, { useState, useEffect } from "react";

export const Carrousel = ({ pages = 3, setCurrentPage }) => {
  //Set number of pages
  const numberOfPages = [];
  for (let i = 1; i <= pages; i++) {
    numberOfPages.push(i);
  }

  // Current active button number
  const [currentButton, setCurrentButton] = useState(1);

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton]);

  return (

    <div className="button-slide">
    <button  className={`${currentButton === 1 ? "disabled" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setCurrentButton((prev) => (prev <= 1 ? prev : prev - 1));
        }}>
      <i className="wi wi-direction-left"></i>
    </button>
    <button className={`${
          currentButton === numberOfPages.length ? "disabled" : ""
        }`}
        onClick={() =>
          setCurrentButton((prev) =>
            prev >= numberOfPages.length ? prev : prev + 1
          )
        }>
      <i className="wi wi-direction-right"></i>
    </button>
  </div>
  
  
  );
};
