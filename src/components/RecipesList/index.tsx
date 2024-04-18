import RecipeCard from "../../components/RecipeCard";

import type { Recipe } from "../../types/recipes";

import useFavorites from "../../hooks/useFavorites";

const RecipesList = ({ recipes }: { recipes: Recipe[] }) => {
  const { toogleFavorites, isFavoriteMap } = useFavorites();

  const isFavorite = (recipe: Recipe) => !!isFavoriteMap[recipe.id];

  return (
    <>
      {recipes.map((recipe) => (
        <RecipeCard
          isFavorite={isFavorite(recipe)}
          key={recipe.id}
          toogleFavorite={toogleFavorites}
          {...recipe}
        />
      ))}
    </>
  );
};

export default RecipesList;
