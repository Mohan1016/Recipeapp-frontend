import React, { useEffect, useState } from "react";
import { getRecipes, deleteRecipe } from "../services/recipeService";

const RecipeList = ({ onEdit, searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    const res = await getRecipes();
    setRecipes(res.data);
  };

  const handleDelete = async (id) => {
    await deleteRecipe(id);
    fetchRecipes();
  };

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4">
      <div className="list-group">
        {filteredRecipes.map((r) => (
          <div
            key={r.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <h5>{r.title}</h5>
              <p><b>Ingredients:</b> {r.ingredients}</p>
              <p><b>Instructions:</b> {r.instructions}</p>
            </div>
            <div>
              {onEdit && (
                <button
                  onClick={() => onEdit(r)}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => handleDelete(r.id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
