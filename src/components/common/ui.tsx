import styled from 'styled-components';

const Button = styled.button`
    background-color: #80c160;
    color: #ffffff;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-size: 14px;
    cursor: pointer;
`;

const Paragraph = styled.p`
    color: black;
    font-size: 16px;
    margin: 0; 
`;
    
const Link = styled(Paragraph)`
    color: blue;
    cursor: pointer;
    font-size: 16px;
`;

const Clear = styled.div`
    clear: both;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Tres columnas con igual ancho */
  grid-gap: 20px; /* Espacio entre los elementos */
`;

export {
    Button,
    Link,
    Paragraph,
    Clear,
    GridContainer,
}