// import React, { useState } from "react";
// import RecipeList from "../components/RecipeList";
// import SearchBox from "../components/SearchBox";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleEdit = (recipe) => {
//     navigate(`/edit/${recipe.id}`); // Navigate to EditRecipePage
//   };

//   return (
//     <>
//       <div className="container my-5 text-center">
//         <h1 className="mb-4">🍲 Food Recipe App</h1>
//         <SearchBox onSearch={setSearchQuery} />
//       </div>

//       <div className="container my-5">
//         <h2 className="text-center mb-4">📋 Available Recipes</h2>
//         <RecipeList searchQuery={searchQuery} onEdit={handleEdit} />
//       </div>
//     </>
//   );
// };

// export default HomePage;





import React, { useState, useEffect } from "react";
import RecipeListCard from "../components/RecipeListCard";
import SearchBox from "../components/SearchBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        // const response = await axios.get("https://localhost:7100/api/Recipe");
        const response = await axios.get("https://recipeapp-2sbw.onrender.com/api/Recipe"); 
        setRecipes(response.data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  const handleEdit = (recipe) => {
    navigate(`/edit/${recipe.id}`);
  };

  const filteredRecipes = recipes.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container my-5 text-center">
        <h1 className="mb-4"> Food Recipe App</h1>
        <SearchBox onSearch={setSearchQuery} />
      </div>

      <div className="container my-5">
        <h2 className="text-center mb-4"> Available Recipes</h2>
        <RecipeListCard recipes={filteredRecipes} onEdit={handleEdit} />
      </div>
    </>
  );
};

export default HomePage;
