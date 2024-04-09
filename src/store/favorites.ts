import { create } from "zustand";

import type { Recipe } from '../types/recipes';

interface RecipeStore {
    favorites: Recipe[];
    setFavorites: (recipes: Recipe[]) => void;
  }
  
  const useRecipeStore = create<RecipeStore>((set) => {

    const storedRecipes = JSON.parse(localStorage.getItem('recipes') || '[]') as Recipe[]

    return {
        favorites: storedRecipes,
        setFavorites: (favorites) => set({ favorites }),
    }
  });
  
  export default useRecipeStore;