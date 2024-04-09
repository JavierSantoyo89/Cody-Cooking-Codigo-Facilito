import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import HeartIcon from '../common/icons/HeartIcon'
import { CardTitle } from '../common/titles'
import { Paragraph, Button } from '../common/ui'

import type { Recipe } from '../../types/recipes';


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
    right: 20px;
    top: 20px;
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

const RecipeCard = ({ 
    id, 
    image, 
    title, 
    description, 
    video, 
    toogleFavorite,
    isFavorite
}: { 
    id: string;
    image: string;
    title: string; 
    description: string;
    video: string;
    isFavorite: boolean;
    toogleFavorite: (newFavorite: Recipe) => void;
}) => {

    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate(`/recipe-detail/${id}`);
    };

    const handleOnClick = useCallback(() => {
        toogleFavorite({
            id,
            image,
            title,
            description,
            video,
        });
    }, [id, image, title, description, video, toogleFavorite]);

    return (
        <CardContainer>
            <ImageContainer style={
                { backgroundImage: `url(${image})` }
            }>
                <LikeIcon 
                    onClick={handleOnClick}
                    data-testid="like-icon"
                >
                    <HeartIcon
                        fill={isFavorite ? '#058240' : '#ffffff'}
                        height="50px"
                        width="50px"
                    />
                </LikeIcon>
            </ImageContainer>
            <ContentContainer>
                <CardTitle>{title}</CardTitle>
                <Paragraph>
                    {elipsis(description)}
                </Paragraph>
                <Button onClick={handleRedirect}>Ver</Button>
            </ContentContainer>

        </CardContainer>
    );
};

export default RecipeCard;

