import { Recipe } from '../models/recipe.js';

export const getAllRecipes = async (req, res, next) => {
  try {
    const recipes = await Recipe.getAllRecipes();
    res.json(recipes);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "🚨SERVER ERROR" });
  }
};
