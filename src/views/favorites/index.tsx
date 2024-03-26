import styled from 'styled-components';

import RecipeCard from '../../components/RecipeCard';
import trcipeImg from '../../assets/imgs/trcipe-img.jpg';
import { GridContainer } from '../../components/common/ui';
import MainWrapper from '../../components/common/MainWrapper';
import { Title as BaseTitle } from '../../components/common/titles';

const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;


const recipes = [
    {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken', 
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    },
    {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken', 
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    },
    {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken', 
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    },
    {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken', 
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    }
]


const Favorites = () => {
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