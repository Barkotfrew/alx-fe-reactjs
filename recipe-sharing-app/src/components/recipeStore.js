import create from "zustand";

const useRecipeStore = create((set) => ({
  // Recipes list
  recipes: [],
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // Search term and filtered recipes
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),

  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // CRUD methods
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  // Favorites
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Recommendations
  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (r) => state.favorites.includes(r.id) && Math.random() > 0.3
      );
      return { recommendations: recommended };
    }),
}));

export default useRecipeStore;
