

import type { Meal } from '../types/recipes';

export const recipesMap = (recipes: Array<Meal> | undefined ) => {
    return recipes 
        ? recipes.map(({ 
            idMeal,
            strYoutube,
            strMealThumb,
            strMeal,
            strInstructions,
        }) => ({
            id: idMeal,
            video: strYoutube,
            image: strMealThumb,
            title: strMeal,
            description: strInstructions,
        })) 
        : [];
}