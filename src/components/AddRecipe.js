// import React, { useState, useEffect } from "react";
// import { addRecipe, updateRecipe } from "../services/recipeService";

// const AddRecipe = ({ onAdded, editRecipe }) => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");
//   const [instructions, setInstructions] = useState("");

//   useEffect(() => {
//     if (editRecipe) {
//       setTitle(editRecipe.title);
//       setIngredients(editRecipe.ingredients);
//       setInstructions(editRecipe.instructions);
//     }
//   }, [editRecipe]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (editRecipe) {
//       await updateRecipe(editRecipe.id, { id: editRecipe.id, title, ingredients, instructions });
//     } else {
//       await addRecipe({ title, ingredients, instructions });
//     }

//     setTitle("");
//     setIngredients("");
//     setInstructions("");
//     if (onAdded) {
//     onAdded();
//   }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mt-4 border p-3 rounded">
//       <h4>{editRecipe ? " Edit Recipe" : " Add Recipe"}</h4>
//       <input
//         className="form-control mb-2"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         className="form-control mb-2"
//         placeholder="Ingredients"
//         value={ingredients}
//         onChange={(e) => setIngredients(e.target.value)}
//         required
//       />
//       <textarea
//         className="form-control mb-2"
//         placeholder="Instructions"
//         value={instructions}
//         onChange={(e) => setInstructions(e.target.value)}
//         required
//       />
//       <button type="submit" className="btn btn-primary">
//         {editRecipe ? "Update" : "Add"}
//       </button>
//     </form>
//   );
// };

// export default AddRecipe;



import React, { useState, useEffect } from "react";
import { addRecipe, updateRecipe } from "../services/recipeService";

const AddRecipe = ({ onAdded, editRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (editRecipe) {
      setTitle(editRecipe.title);
      setIngredients(editRecipe.ingredients);
      setInstructions(editRecipe.instructions);
      setImageUrl(editRecipe.imageUrl || "");
    }
  }, [editRecipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipeData = { title, ingredients, instructions, imageUrl };

    if (editRecipe) {
      await updateRecipe(editRecipe.id, { ...recipeData, id: editRecipe.id });
    } else {
      await addRecipe(recipeData);
    }

    setTitle("");
    setIngredients("");
    setInstructions("");
    setImageUrl("");

    if (onAdded) onAdded();
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 border p-3 rounded">
      <h4>{editRecipe ? " Edit Recipe" : " Add Recipe"}</h4>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="form-control mb-2"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <textarea
        className="form-control mb-2"
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        required
      />
      <button type="submit" className="btn btn-primary">
        {editRecipe ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddRecipe;
