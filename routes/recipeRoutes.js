import express from 'express';
import { getAllRecipes } from '../controllers/recipeController.js';
const router = express.Router();

router.get('/', getAllRecipes);
export default router;
