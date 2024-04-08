import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import MainWrapper from '../../components/common/MainWrapper';
import { Title as BaseTitle } from '../../components/common/titles';


const Title = styled(BaseTitle)`
    color: #F3C301;
    margin-bottom: 30px;
    text-align: center;
`;

const RecipeDetail = () => {
    const { id } = useParams();
    return (
        <MainWrapper>
            <Title>Este es el detalle  de la receta con id: {id}</Title>
        </MainWrapper>
    );
};

export default RecipeDetail;