import styled from "styled-components";
import CodySVG from "../../assets/imgs/Cody.svg";
import ArrowSVG from "../../assets/icons/ArrowBack.svg";
import { Link } from "react-router-dom";

export const Error404 = () => {
  return (
    <Container>
      <Title>404</Title>
      <Description>¡Ooops!</Description>
      <Image src={CodySVG} alt="Descripción de la imagen" />
      <Link to="/">
        <Button>
          <Icon />
          Volver al Home
        </Button>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 84px;
  margin-bottom: 5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 36px;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 350px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #87c159;
  color: #fff;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6a9f4d;
  }
`;
const Icon = styled.span`
  width: 24px; 
  height: 24px; 
  background-image: url(${ArrowSVG}); 
  background-size: contain; 
  background-repeat: no-repeat; SVG 
  background-position: center left; 
  margin-right: 10px;
  background-color: #fff;
  border-radius: inherit;
`;
