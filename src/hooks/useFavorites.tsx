import useStore from "../store/favorites";
import type { Recipe } from "../types/recipes";

const useFavorites = () => {
  const favorites = useStore((state) => state.favorites);
  const setFavorites = useStore((state) => state.setFavorites);

  const toogleFavorites = (newFavorite: Recipe) => {
    let updatedFavorites = [];
    const foundObject = favorites.find((obj) => obj.id === newFavorite.id);

    if (foundObject) {
      updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== newFavorite.id,
      );
    } else {
      updatedFavorites = [...favorites, newFavorite];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("recipes", JSON.stringify(updatedFavorites));
  };

  const isFavoriteMap = Object.fromEntries(
    favorites.map((favorite) => [favorite.id, true]),
  );

  const numberFavorites = favorites.length;

  return {
    favorites,
    toogleFavorites,
    isFavoriteMap,
    numberFavorites,
  };
};

export default useFavorites;
