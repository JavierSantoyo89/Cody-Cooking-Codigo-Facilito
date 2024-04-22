import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../components/common/ui";
import { Title as BaseTitle } from "../../../../components/common/titles";
import type { Category } from "../../../../types/categories";
import { useRestClient } from "../../../../hooks/useRestClient";
import { baseUrl } from "../../../../constants";

import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  category: Category;
}

const Title = styled(BaseTitle)`
  background: #80c1607f;
  color: #f3c301;
  font-size: 48px;
  margin-bottom: 10px;
  padding: 0 20px;

  @media (max-width: 720px) {
    font-size: 24px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ItemContainer = styled.div<{ bg: string }>`
  align-items: center;
  background-image: ${({ bg }: { bg: string }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  display: flex;
  height: 400px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  text-align: center;
  width: 100%;
`;

const ViewMoreButton = styled(Button)``;

const CarouselItem: FC<Props> = ({ category }) => {
  const [get, meals] = useRestClient("get");
  const navigate = useNavigate();

  const handleClick = () => {
    get(`${baseUrl}filter.php?c=${category.strCategory}`);
  };

  useEffect(() => {
    if (Array.isArray(meals?.meals) && meals?.meals.length > 0) {
      navigate(`/detail/${meals.meals[0].idMeal}`);
    }
  }, [meals, navigate]);

  return (
    <ItemContainer bg={category.strCategoryThumb} key={category.idCategory}>
      <TitleContainer>
        <Title>{category.strCategory}</Title>
        <ViewMoreButton onClick={handleClick}>VER MÁS</ViewMoreButton>
      </TitleContainer>
    </ItemContainer>
  );
};

export default CarouselItem;
