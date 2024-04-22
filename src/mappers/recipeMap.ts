import type { Meal } from "../types/recipes";

const mapIngredients = (ingredients: string[]) => {
  return ingredients.filter((ing) => ing !== "");
};

export const recipesMap = (recipes: Array<Meal> | undefined) => {
  return recipes
    ? recipes.map(
        ({
          idMeal,
          strYoutube,
          strMealThumb,
          strMeal,
          strInstructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15,
          strIngredient16,
          strIngredient17,
          strIngredient18,
          strIngredient19,
          strIngredient20,
        }) => ({
          id: idMeal,
          video: strYoutube.replace("https://www.youtube.com/watch?v=", ""),
          image: strMealThumb,
          title: strMeal,
          description: strInstructions,
          ingredients: mapIngredients([
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
            strIngredient6,
            strIngredient7,
            strIngredient8,
            strIngredient9,
            strIngredient10,
            strIngredient11,
            strIngredient12,
            strIngredient13,
            strIngredient14,
            strIngredient15,
            strIngredient16,
            strIngredient17,
            strIngredient18,
            strIngredient19,
            strIngredient20,
          ]),
        }),
      )
    : [];
};

// https://www.youtube.com/watch?v=dsJtgmAhFF4
// https://www.youtube.com/embed/etbJ9ssgsWY?si=KHacn5RQcV8BFr3H
