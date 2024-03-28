import { useEffect, useState } from "react";
import styled from "styled-components";



interface Props {
    images: string[];
    autoPlay?: boolean;
    showButtons?: boolean;
}

export default function Carousel(props: Props) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(props.images[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (props.autoPlay) {
            const interval = setInterval(() => {
                selectNewImage(selectedIndex, props.images);
            }, 5000);
            return () => clearInterval(interval);
        }
    });

    const selectNewImage = (_index: number, images: string[], next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1: selectedIndex > 0;
            const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(props.images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 500);
    };

    const previous = () => {
        selectNewImage(selectedIndex, props.images, false);
    };
    const next = () => {
        selectNewImage(selectedIndex, props.images);
    };

    // require().default
    return(
        <CarouselContainer>
            <TitleContainer>
                <Title>ESTO ES CODY COOKING</Title>
                <ViewMoreButton>VER MÁS</ViewMoreButton>
            </TitleContainer>
            <CarouselButton onClick={previous} className="carouselButton">{"<"}</CarouselButton>
            <CarouselImg 
                src={(`src/assets/imgs/images/${selectedImage}`)} 
                className={loaded ? "loaded" : ""} 
                alt="img-carrusel" 
                onLoad={() => setLoaded(true)}
            />
            <CarouselButton onClick={next} className="carouselButton">{">"}</CarouselButton>
        </CarouselContainer>
    );
};

const Title = styled.h1`
    color: #F3C301;
    font-size: 3rem;
`

const TitleContainer = styled.div`
    position: absolute;
    z-index: 10;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const CarouselContainer = styled.div`
    width: 100%;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const CarouselImg = styled.img`
    max-width: 800px;
    width: 90%;
    height: auto;
    transition: 1s;
    opacity: 0;
    &.loaded {
        opacity: 1;
    }
    border-radius: 50px;
/* Drop shadow img */
    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.25);
`

const ViewMoreButton = styled.button`
  background-color: #87C159;
  color: #ffffff;
  width: 180px;
  border: none;
  border-radius: 24px;
  padding: 16px 24px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 4px 24px 0px rgba(82, 181, 117, 0.25);
  transition: background-color 0.3s ease;
  /* Cambia el color de fondo cuando el botón es presionado */
  &:active {
    background-color: #6a9f4d;
  }

  /* Cambia el color de fondo cuando el botón es activado (seleccionado) */
  &:focus {
    outline: none;
    background-color: #6a9f4d;
  }
`;



const CarouselButton = styled.button`
    background-color: transparent;
    color: #2b2b2b;
    width: 90px;
    height: 90px;
    font-size: 50px;
    font-weight: bold;
    &.carouselButton:hover {
        color: #2b2b2b;
        border: transparent;
    }
    &.carouselButton:focus,
    &.carouselButton:focus-visible {
        outline: none;
    }
`