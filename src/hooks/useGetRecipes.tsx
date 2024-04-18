
import { useEffect, useState } from 'react';
import { useRestClient } from './useRestClient';
import type { Recipe } from '../types/recipes';
import { recipesMap } from '../mappers/recipeMap'

export function useGetRecipesService(url: string): {
    recipes: Recipe[], 
    loading: boolean, 
    error: unknown
} {
  const [get, rawData, loading, error] = useRestClient('get');
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    async function fetchData() {
        await get(url);
    }
    
    fetchData();
  }, [url, get])

  console.log({
    rawData
  })

  useEffect(() => {
    if (Array.isArray(rawData?.meals) && rawData.meals.length > 0) {
        setRecipes(recipesMap(rawData.meals))
    }
  }, [rawData]);

  return { recipes, loading, error };
}