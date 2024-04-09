import { useParams } from 'react-router-dom';

import { useGetRecipesService } from '../../hooks/useGetRecipes';
import { baseUrl } from '../../constants'

import styled from "styled-components";
import RecipesList from '../../components/RecipesList';
import { CardContainer } from '../../components/RecipeCard';
import MainWrapper from "../../components/common/MainWrapper";
import { Title as BaseTitle } from "../../components/common/titles";
import { GridDetailContainer } from "../../components/common/ui";

const recipesHardCode = [
    {
        description: "Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.",
        id: "52776",
        image: "https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg",
        title: "Chocolate Gateau",
        video: "https://www.youtube.com/watch?v=dsJtgmAhFF4",
    }, 
    {
        description: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot. Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes. No water is needed, the chicken will cook in the Enchilada sauce. Make sure you stir occasionally so that it doesn't stick to the bottom.\r\nRemove chicken from the pot and shred with two forks.\r\nPreheat oven to 375 F degrees.\r\nStart layering the casserole. Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish. I used a longer baking dish, so that I can put 2 corn tortillas across. Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce. Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese. Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.\r\nBake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.\r\nServe warm.",
        id: "52765",
        image: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg",
        title: "Chicken Enchilada Casserole",
        video: "https://www.youtube.com/watch?v=EtVkwVKLc_M",
    }, 
    {
        description: "Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy",
        id: "52779",
        image: "https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg",
        title: "Cream Cheese Tart",
        video: "https://www.youtube.com/watch?v=UhQPwO4uymo",
    }
]

const Details = () => {
    const { id } = useParams();
    const { recipes } = useGetRecipesService(`${baseUrl}lookup.php?i=${id}`);

    const recipeDetailData = recipes[0];

    if (!recipeDetailData) return null;

    return (
        <MainWrapper>
            <Title>{recipeDetailData.title}</Title>
            <DetailImg src={recipeDetailData.image} />
                <LeftContainer>
                    <DetailContainer>
                        <DetailSubtitle>Instructions</DetailSubtitle>
                        <DetailParagraph>
                            {recipeDetailData.description}
                        </DetailParagraph>
                    </DetailContainer>
                    <DetailContainer className="videoResponsive">
                        <VideoResponsive
                            src={`https://www.youtube.com/embed/${recipeDetailData.video}`}
                        />
                    </DetailContainer>
                </LeftContainer>
                <RightContainer>
                    <DetailContainer>
                        <IngredientTitle>INGREDIENTS</IngredientTitle>
                        <ul>
                            <IngredientLI>1lb ingrediente 1</IngredientLI>
                            <IngredientLI>1lb ingrediente 1</IngredientLI>
                            <IngredientLI>1lb ingrediente 1</IngredientLI>
                        </ul>
                    </DetailContainer>
                    <DetailContainer>
                        <SimilarTitle>RECETAS SIMILARES</SimilarTitle>
                        <RecipesSection>
                            <RecipesList recipes={recipesHardCode} />
                        </RecipesSection>
                    </DetailContainer>
                </RightContainer>

        </MainWrapper>
    );
};

const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;

const DetailImg = styled.img`
    max-width: 950px;
    width: 100%;
    max-height: 540px;
    object-fit: cover;
    margin: 10px auto;
    border-radius: 100px;
`
const DetailContainer = styled.div`
    width: 100%;
    padding: 20px;
    &.videoResponsive {
        height: 0;
        overflow: hidden;
        padding-bottom: 56.25%;
        padding-top: 30px;
        position: relative;
    }

`

const DetailSubtitle = styled.h2`
    color: #333;
    letter-spacing: 0.4px;
    text-transform: uppercase;
`
const DetailParagraph = styled.p`
    color: #262522;
    line-height: 140%;
    width: 100%;
`

const IngredientTitle = styled.h3`
    color: #F3C301;
    letter-spacing: 0.36px;
    text-transform: uppercase;
`
const IngredientLI = styled.li`
    color: #262522;
`

const VideoResponsive = styled.iframe`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
`

const SimilarTitle = styled.h4`
    color: #F3C301;
    letter-spacing: 0.36px;
    text-transform: uppercase;
`

const RecipesSection = styled.div`
    ${CardContainer} {
        margin-bottom: 20px;
    }
`;

const DetailCols = styled.div`
    display: inline-grid;
    width: calc(50% - 10px);

    @media (max-width: 620px) {
        width: 100%;
    }    
`;

const LeftContainer = styled(DetailCols)`
    @media (max-width: 620px) {
        margin-bottom: 20px;
    } 
`;

const RightContainer = styled(DetailCols)`
    background: #F9F2D5;
    margin-left: 20px;

    @media (max-width: 620px) {
        margin-left: 0;
    } 
`;

export default Details;