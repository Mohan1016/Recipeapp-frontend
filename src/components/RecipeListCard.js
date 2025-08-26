import React from "react";
import { useNavigate } from "react-router-dom";

const RecipeListCard = ({ recipes }) => {
  const navigate = useNavigate();

  const imageMap = {
    "Paneer Butter Masala": "/images/pbm.jpg",
    "Lemon Rice": "/images/lr.jpg",
    "Potato Fry": "/images/pf.jpg",
    "Classic pancakes": "/images/pk.jpg"
  };

  return (
    <div className="row">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="col-md-4 mb-4">
          <div
            className="card h-100 shadow-sm"
            onClick={() => navigate(`/recipe/${recipe.id}`)}
            style={{ cursor: "pointer", borderRadius: "12px", overflow: "hidden" }}
          >
            <img
              src={imageMap[recipe.title] || "https://via.placeholder.com/300x200"}
              className="card-img-top"
              alt={recipe.title}
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body d-flex align-items-center justify-content-center">
              <h5 className="card-title text-center mb-0">{recipe.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeListCard;
