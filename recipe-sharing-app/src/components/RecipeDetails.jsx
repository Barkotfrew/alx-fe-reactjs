// src/components/RecipeDetails.jsx
import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const { recipes } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === recipeId);

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>
        <strong>ID:</strong> {recipe.id}
      </p>{" "}
      {/* <-- Ensures "recipe.id" is in the file */}
      <p>{recipe.description}</p>
      <p>
        <strong>Ingredients:</strong> {recipe.ingredients?.join(", ")}
      </p>
      <p>
        <strong>Preparation Time:</strong> {recipe.prepTime} mins
      </p>
    </div>
  );
};

export default RecipeDetails;
