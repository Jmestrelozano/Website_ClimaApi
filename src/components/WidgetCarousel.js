import React, { useEffect, useState } from "react";
import { Peticiones } from "../api/peticiones";
import { CardWidget } from "./CardWidget";
import { Carrousel } from "./Carrousel";

export const WidgetCarousel = () => {
  let resultado = Peticiones(
    "https://run.mocky.io/v3/73c29128-d158-40db-aeae-ea78a0d762b7","List"
  ).list
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = resultado.slice(indexOfFirstPost, indexOfLastPost);
  const pages = Math.ceil(resultado.length / postsPerPage);

  return (
    <>
      <div id="widget-carousel">
        <div className="widget-carousel-header">
          <h3>Forecast Extended</h3>
          <Carrousel pages={pages} setCurrentPage={setCurrentPage} />
        </div>

        <div className="content-carousel-item contened">
          <CardWidget posts={currentPosts} />
        </div>
      </div>
    </>
  );
};
