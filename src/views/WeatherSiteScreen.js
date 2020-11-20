import React from "react";
import { WidgetCarousel } from "../components/WidgetCarousel";
import { WidgetFavorite } from "../components/WidgetFavorite";
import { WidgetHeader } from "../components/WidgetHeader";
import { WidgetSities } from "../components/WidgetSities";
import { WidgetSugest } from "../components/WidgetSugest";

export const WeatherSiteScreen = () => {
  return (
    <div className="container">
      <WidgetHeader />
      <div className="container-body">
        <WidgetCarousel />
        <WidgetFavorite />
        <WidgetSugest />
        <WidgetSities /> 
      </div> 
    </div>
  );
};
