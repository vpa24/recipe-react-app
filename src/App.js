import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  const YOUR_APP_ID = "330cabaa";
  const YOUR_APP_KEY = "bc668c8de06beac729ef5da572243692";
  const [recipes, setRescipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`
    );
    const data = await response.json();
    setRescipes(data.hits);
  };

  const onChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App container" onSubmit={onSubmit}>
      <form className="form-group m-2">
        <input
          className="form-control"
          type="text"
          name="search"
          value={search}
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-sm btn-success m-2"
        />
      </form>
      <div className="container">
        <div className="row">
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              ingredientLines={recipe.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
