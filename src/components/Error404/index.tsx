import styled from "styled-components";
import { Link } from "react-router-dom";
import ArrowIcon from "../common/icons/ArrowIcon";
import CodySVG from "../common/images/CodySVG";

const Error404 = () => {
  return (
    <Container>
      <Title>404</Title>
      <Description>¡Ooops!</Description>
      <CodySVG height="400px" />
      <Link to="/">
        <Button>
          <ContainerIcon>
            <ArrowIcon />
          </ContainerIcon>
          Volver al Home
        </Button>
      </Link>
    </Container>
  );
};
export default Error404;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 84px;
  margin-bottom: 4px;
  margin-top: 4px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Description = styled.p`
  font-size: 36px;
  margin: 0 0 10px 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const Button = styled.button`
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
  margin-top: 16px;
  margin-bottom: 16px;
  &:hover {
    background-color: #6a9f4d;
  }
`;
const ContainerIcon = styled.span`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`;
