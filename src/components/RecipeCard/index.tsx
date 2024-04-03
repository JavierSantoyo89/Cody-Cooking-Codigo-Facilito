import { useState } from 'react';
import styled from 'styled-components';

import HeartIcon from '../common/icons/Heart'
import { CardTitle } from '../common/titles'
import { Paragraph, Button } from '../common/ui'

const CardContainer = styled.div`
    width: 100%;
`;

const ImageContainer = styled.div`
    border-radius: 30px 30px 0 0;
    height: 160px;
    overflow: hidden;
    position: relative;
    width: 100%;
    background-size: cover;
`;

const LikeIcon = styled.div`
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
`;

const ContentContainer = styled.div`
    height: 190px;
    padding: 10px;
    position: relative;
    width: 100%;

    Button {
        bottom: 0;
        left: 0;
        position: absolute;
        width: 100%;
    }
`;


const elipsis = (texto: string, longitudMaxima = 84) => {
    if (texto.length > longitudMaxima) {
      return texto.slice(0, longitudMaxima) + '...';
    } else {
      return texto;
    }
  }

const RecipeCard = ({ image, title, description }: { 
    image: string;
    title: string; 
    description: string; 
}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const toogleFavorite = () => {
        setIsFavorite((currentValue: boolean) => !currentValue);
      }

    return (
        <CardContainer>
            <ImageContainer style={
                { backgroundImage: `url(${image})` }
            }>
                <LikeIcon 
                    className={`heart-icon ${isFavorite ? 'is-favorite' : ''}`}
                    onClick={toogleFavorite}
                    data-testid="like-icon"
                >
                    <HeartIcon
                        isFavorite={isFavorite}
                    />
                </LikeIcon>
            </ImageContainer>
            <ContentContainer>
                <CardTitle>
                    {title}
                </CardTitle>
                <Paragraph>
                    {elipsis(description)}
                </Paragraph>
                <Button>Ver</Button>
            </ContentContainer>

        </CardContainer>
    );
};

export default RecipeCard;

