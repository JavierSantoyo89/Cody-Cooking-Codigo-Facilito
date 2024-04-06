import styled from 'styled-components';

import RecipeCard from '../../components/RecipeCard';
import { GridContainer } from '../../components/common/ui';
import MainWrapper from '../../components/common/MainWrapper';
import { Title as BaseTitle } from '../../components/common/titles';

import { useGetRecipesService } from '../../hooks/useGetRecipes';
import { baseUrl } from '../../constants'
import { getRandomLetter } from '../../utils'

import type { Recipe } from '../../types/recipes';

import useFavorites from '../../hooks/useFavorites';

const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;

const letterToFilter = getRandomLetter(); // Puedes obtener una letra aleatoria

const Recipes = () => {
    const { recipes } = useGetRecipesService(`${baseUrl}search.php?f=${letterToFilter}`);

    const {toogleFavorites, isFavoriteMap} = useFavorites();

    const isFavorite = (recipe: Recipe) => !!isFavoriteMap[recipe.id];

    return (
        <MainWrapper>
            <Title>Recetas que inician con: {letterToFilter}</Title>
            
            <GridContainer>
                {recipes.map((recipe) => (
                    <RecipeCard
                        isFavorite={isFavorite(recipe)}
                        key={recipe.id}
                        toogleFavorite={toogleFavorites}
                        {...recipe}
                    />
                ))}
            </GridContainer>

        </MainWrapper>
    );
};

export default Recipes;