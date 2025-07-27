import { useRecipeStore } from "../stores/recipeStore";

const FavoritesList = () => {
  const { favorites, recipes } = useRecipeStore();

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div>
      <h2>Favorites</h2>
      {favoriteRecipes.map((r) => (
        <div key={r.id}>
          <h3>{r.title}</h3>
          <p>{r.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
