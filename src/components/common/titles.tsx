import styled from 'styled-components';


const Title = styled.h1`
    color: #000000;
    font-size: 48px;
    margin: 0;
    line-height: initial;

    @media (max-width: 620px) {
        font-size: 36px;
    }
`;

const Subtitle = styled(Title).attrs({ as: 'h2' })`
    font-size: 24px;
`;

const CardTitle = styled.h3`
    color: #2b2b2b;
    font-size: 24px;
    line-height: initial;
    margin: 0;
`;

export {
    Title,
    Subtitle,
    CardTitle
}