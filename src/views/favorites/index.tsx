import styled from 'styled-components';

import RecipeCard from '../../components/RecipeCard';
import { GridContainer } from '../../components/common/ui';
import MainWrapper from '../../components/common/MainWrapper';
import { Title as BaseTitle } from '../../components/common/titles';

import { useGetRecipesService } from '../../hooks/useGetRecipes';

const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;


const Favorites = () => {
    const { recipes } = useGetRecipesService('https://www.themealdb.com/api/json/v1/1/search.php?f=b');

    return (
        <MainWrapper>
            <Title>Favoritos</Title>
            
            <GridContainer>
                {recipes.map(({ image, title, description }) => (
                    <RecipeCard 
                        image={image}
                        title={title}
                        description={description}
                    />
                ))}
            </GridContainer>

        </MainWrapper>
    );
};

export default Favorites;