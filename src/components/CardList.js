import './CardList.css';
import React from "react";
import Card from "./Card";

function CardList({ results }) {
  let data = [];
  if (results.data) {
    data = results.data.Search || [];
  }
  console.log(data);
  return (
    <div className="result-list">
      {data.map((item) => (
        <Card key={item.imdbID} movie={item} />
      ))}
    </div>
  );
}

export default CardList;