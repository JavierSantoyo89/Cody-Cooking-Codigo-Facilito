import styled from 'styled-components';

import type { Recipe } from '../../types/recipes';
import RecipeCard from '../../components/RecipeCard';
import { GridContainer } from '../../components/common/ui';
import MainWrapper from '../../components/common/MainWrapper';
import { Title as BaseTitle, Subtitle as BaseSubtitle } from '../../components/common/titles';


import useFavorites from '../../hooks/useFavorites';

const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;

const Subtitle = styled(BaseSubtitle)`
    color: #666666;
    text-align: center;
`;

const Favorites = () => {

    const {favorites, isFavoriteMap, toogleFavorites} = useFavorites();
    const isFavorite = (recipe: Recipe) => !!isFavoriteMap[recipe.id];

    return (
        <MainWrapper>
            <Title>Favoritos</Title>

            {favorites.length > 0
                ? (
                    <GridContainer>
                        {favorites.map((favorite) => (
                            <RecipeCard
                            isFavorite={isFavorite(favorite)}
                            key={favorite.id}
                            toogleFavorite={toogleFavorites}
                            {...favorite}
                        />
                        ))}
                    </GridContainer>
                )
                : <Subtitle>No tienes favoritos :(</Subtitle>
            }
        </MainWrapper>
    );
};

export default Favorites;