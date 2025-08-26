import axios from "axios";

// const API_URL = "https://localhost:7100/api/Recipe"; 

const API_URL = "https://recipeapp-2sbw.onrender.com/api/Recipe"; 

export const getRecipes = () => axios.get(API_URL);
export const getRecipe = (id) => axios.get(`${API_URL}/${id}`);
export const addRecipe = (recipe) => axios.post(API_URL, recipe); 
export const updateRecipe = (id, recipe) => axios.put(`${API_URL}/${id}`, recipe);
export const deleteRecipe = (id) => axios.delete(`${API_URL}/${id}`);
