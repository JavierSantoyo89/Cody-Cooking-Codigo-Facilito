import styled from "styled-components";

import RecipesList from "../../components/RecipesList";
import { GridContainer } from "../../components/common/ui";
import MainWrapper from "../../components/common/MainWrapper";
import {
  Title as BaseTitle,
  Subtitle as BaseSubtitle,
} from "../../components/common/titles";

import { useGetRecipesService } from "../../hooks/useGetRecipes";
import { baseUrl } from "../../constants";
import { getRandomLetter } from "../../utils";

const Title = styled(BaseTitle)`
  color: #f3c301;
  margin-bottom: 30px;
  text-align: center;
`;

const Subtitle = styled(BaseSubtitle)`
  color: #666666;
  text-align: center;
`;

const letterToFilter = getRandomLetter(); // Puedes obtener una letra aleatoria

const Recipes = () => {
  const { recipes } = useGetRecipesService(
    `${baseUrl}search.php?f=${letterToFilter}`,
  );

  return (
    <MainWrapper>
      <Title>Recetas que inician con: {letterToFilter}</Title>

      {recipes.length > 0 ? (
        <GridContainer>
          <RecipesList recipes={recipes} />
        </GridContainer>
      ) : (
        <Subtitle>No hay recetas que empiecen co {letterToFilter}</Subtitle>
      )}
    </MainWrapper>
  );
};

export default Recipes;
