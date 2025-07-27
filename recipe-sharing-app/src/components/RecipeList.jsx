// src/components/RecipeList.jsx
import React from "react";
import { Link } from "react-router-dom"; // ✅ Required import
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>{" "}
            {/* ✅ Uses Link */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
