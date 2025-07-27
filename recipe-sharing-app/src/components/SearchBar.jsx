import { useRecipeStore } from "../stores/recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;
