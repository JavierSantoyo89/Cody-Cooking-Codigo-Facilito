import styled from "styled-components";
import  RecipeCard  from "../../components/RecipeCard";
import MainWrapper from "../../components/common/MainWrapper";
import { Title as BaseTitle } from "../../components/common/titles";
import { GridDetailContainer } from "../../components/common/ui";
import trcipeImg from '../../assets/imgs/trcipe-img.jpg'

const recipes = [
    {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken',
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    }, {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken',
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    }, {
        image: trcipeImg,
        title: 'Savory Herb-Infused Chicken',
        description: 'Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken',
    }
]


const Details = () => {
    return (
        <MainWrapper>
            <Title>Titulo Receta</Title>
            <DetailImg src="https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg" />
            <GridDetailContainer>
                <DetailContainer>
                    <DetailSubtitle>Instructions</DetailSubtitle>
                    <DetailParagraph>
                        Heat oven to 200C/180C fan/gas 6 and line a baking tray with foil. Drain the chickpeas, pat dry and tip onto the prepared baking tray. Add the oil and paprika, toss to coat, then roast for 20-25 mins until browned and crisp, shaking halfway through cooking. Meanwhile, put the tomatoes and onion in a small bowl with the vinegar and set aside to pickle. Put the avocado in another bowl and mash with a fork, leaving some larger chunks. Stir in the lime juice and season well. Mix the soured cream with the harissa and set aside until ready to serve. Heat a griddle pan until nearly smoking. Add the tortillas , one at a time, charring each side until hot with griddle lines. Put everything on the table and build the fajitas : spread a little of the harissa cream over the tortilla, top with roasted chickpeas, guacamole, pickled salsa and coriander, if you like. Serve with the lime wedges for squeezing over.
                    </DetailParagraph>
                </DetailContainer>
                <DetailContainer>
                    <IngredientTitle>INGREDIENTS</IngredientTitle>
                    <ul>
                        <IngredientLI>1lb ingrediente 1</IngredientLI>
                        <IngredientLI>1lb ingrediente 1</IngredientLI>
                        <IngredientLI>1lb ingrediente 1</IngredientLI>
                    </ul>
                </DetailContainer>
                <DetailContainer className="videoResponsive">
                    <VideoResponsive
                        src="https://www.youtube.com/embed/etbJ9ssgsWY?si=KHacn5RQcV8BFr3H"
                    />
                </DetailContainer>
                <DetailContainer>
                    <SimilarTitle>RECETAS SIMILARES</SimilarTitle>
                    {recipes.map(({ image, title, description }) => (
                        <RecipeCard
                            image={image}
                            title={title}
                            description={description}
                        />
                    ))};
                </DetailContainer>
            </GridDetailContainer>
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

export default Details;