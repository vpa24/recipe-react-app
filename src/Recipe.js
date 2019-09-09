import React from "react";

const Recipe = ({ label, image, ingredientLines }) => {
  return (
    <div className="col">
      <h3>{label}</h3>
      <img src={image} alt="" />
      <br />
      <ul className="list-group list-group-flush m-2">
        {ingredientLines.map(ingredientLine => (
          <li className="list-group-item">
            <h6>{ingredientLine}</h6>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
