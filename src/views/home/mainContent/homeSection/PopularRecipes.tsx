import styled from "styled-components";

import { baseUrl } from '../../../../constants'
import RecipesList from '../../../../components/RecipesList';
import { GridContainer } from "../../../../components/common/ui";
import { useGetRecipesService } from '../../../../hooks/useGetRecipes';
import { Subtitle as BaseSubtitle } from '../../../../components/common/titles';


const Subtitle = styled(BaseSubtitle)`
    color: #2b2b2b;
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 2rem;
    text-align: center;
`;

const RecipesSectionContainer = styled.section`
    width: 100%;
`;

const PopularRecipes = () => {
    const { recipes } = useGetRecipesService(`${baseUrl}search.php?f=d`);

    return(
        <RecipesSectionContainer>
            <Subtitle>Recetas Populares</Subtitle>
            {recipes.length > 0 && (
                    <GridContainer>
                        <RecipesList recipes={recipes} />
                    </GridContainer>
                )   
            }

        </RecipesSectionContainer>
    )
};

export default PopularRecipes;