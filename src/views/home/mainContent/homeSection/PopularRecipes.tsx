import styled from "styled-components";
import RecipeCard from "../../../../components/RecipeCard";
import trcipeImg from "../../../../assets/imgs/trcipe-img.jpg";
import { GridContainer } from "../../../../components/common/ui";

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

const PopularRecipes = () => {
    return(
        <RecipesSectionContainer>
            <SubTitle>Recetas Populares</SubTitle>
            <GridContainer>
                {recipes.map(({ image, title, description }) => (
                    <RecipeCard 
                        image={image}
                        title={title}
                        description={description}
                    />
                ))}
            </GridContainer>

        </RecipesSectionContainer>
    )
}
const SubTitle = styled.h2`
    color: #262522;
    font-size: 2rem;
    text-align: center;

`

const RecipesSectionContainer = styled.section`
    width: 100%;
`

export default PopularRecipes;