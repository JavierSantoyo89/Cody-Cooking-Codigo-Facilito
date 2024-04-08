import styled from 'styled-components';

import RecipesList from '../../components/RecipesList';
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
    const {favorites} = useFavorites();

    return (
        <MainWrapper>
            <Title>Favoritos</Title>

            {favorites.length > 0
                ? (
                    <GridContainer>
                        <RecipesList recipes={favorites} />
                    </GridContainer>
                )
                : <Subtitle>No tienes favoritos :(</Subtitle>
            }
        </MainWrapper>
    );
};

export default Favorites;