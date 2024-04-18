import { FC } from "react";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

import type { Category } from "../../../../types/categories";

import CarouselItem from "./CarouselItem";

import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Props {
  categories: Category[];
}

const CarouselContainer = styled.div`
  .carousel .control-dots {
    bottom: 40px;

    .selected {
      background: #058240;
      scale: 1.5;
      width: 30px;
      border-radius: 10px;
    }
  }
  .carousel-slider .control-arrow:hover {
    background: #05824080;
  }
`;

const Carousel: FC<Props> = ({ categories }) => {
  return (
    <CarouselContainer>
      <ResponsiveCarousel showArrows={true}>
        {categories
          .filter((_, index) => index < 5)
          .map((cat) => (
            <CarouselItem key={cat.idCategory} category={cat} />
          ))}
      </ResponsiveCarousel>
    </CarouselContainer>
  );
};

export default Carousel;
