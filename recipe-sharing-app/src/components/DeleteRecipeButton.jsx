import { useNavigate } from "react-router-dom";
import { useRecipeStore } from "../stores/recipeStore";

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate("/");
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;
