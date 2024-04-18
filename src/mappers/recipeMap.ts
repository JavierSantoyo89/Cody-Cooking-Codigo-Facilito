import type { Meal } from "../types/recipes";

export const recipesMap = (recipes: Array<Meal> | undefined) => {
  return recipes
    ? recipes.map(
        ({ idMeal, strYoutube, strMealThumb, strMeal, strInstructions }) => ({
          id: idMeal,
          video: strYoutube.replace("https://www.youtube.com/watch?v=", ""),
          image: strMealThumb,
          title: strMeal,
          description: strInstructions,
        }),
      )
    : [];
};

// https://www.youtube.com/watch?v=dsJtgmAhFF4
// https://www.youtube.com/embed/etbJ9ssgsWY?si=KHacn5RQcV8BFr3H
