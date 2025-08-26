import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getRecipe, deleteRecipe } from "../services/recipeService";
import { useNavigate } from "react-router-dom";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const { data } = await getRecipe(id);
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      try {
        await deleteRecipe(id);
        navigate("/");
      } catch (err) {
        console.error("Error deleting recipe:", err);
      }
    }
  };

  if (!recipe) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{recipe.title}</h2>

      <div className="mb-3">
        <strong>Ingredients:</strong>
        <div>
          {recipe.ingredients.split(",").map((item, index) => (
            <p key={index} className="mb-1">{item.trim()}</p>
          ))}
        </div>
      </div>

      <div className="mb-3">
        <strong>Instructions:</strong>
        <div>
          {recipe.instructions.split("\n").map((line, index) => (
            <p key={index} className="mb-1">{line}</p>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <Link to={`/edit/${id}`} className="btn btn-warning me-2">Edit</Link>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
