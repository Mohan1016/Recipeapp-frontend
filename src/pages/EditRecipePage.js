import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, updateRecipe } from "../services/recipeService";
import Navbar from "../components/navbar";

const EditRecipePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ title: "", description: "", ingredients: "" });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateRecipe(id, recipe);
      navigate(`/recipe/${id}`);
    } catch (err) {
      console.error("Error updating recipe:", err);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <h2>Edit Recipe</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Instructions</label>
            <textarea
              className="form-control"
              name="instructions"
              value={recipe.instructions}
              onChange={handleChange}
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Update</button>
        </form>
      </div>
    </>
  );
};

export default EditRecipePage;
