import React from "react";
import Card from "./Card";
import seriesData from "../data";

const CardList = () => {
  return (
    <div className="card-container">
      {seriesData.map((series) => (
        <Card key={series.id} {...series} />
      ))}
    </div>
  );
};

export default CardList;
