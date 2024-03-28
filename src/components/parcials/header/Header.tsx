import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

import { ResponsiveContainer as BaseContainer } from "../../common/layout"

export const Header = () => {
  return (
    <ResponsiveContainer>
      <HeaderContainer>
        <LeftSection>
          <Logo src="src/assets/imgs/cody-image.jpg" alt="Logo" />
          <TextContainer>
            <Text>Cody</Text>
            <Text>Cooking</Text>
          </TextContainer>
        </LeftSection>
        <CenterSection>
          <MarginSection>
            <Link to="/">HOME</Link>
          </MarginSection>
          <MarginSection>
            <Link to="/login">RECETAS</Link>
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">TIPOS DE COCINA</Link>
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">SOBER NOSOTROS</Link>
          </MarginSection>
        </CenterSection>
        <RightSection>
          <Icon href="https://www.facebook.com">
            <IoSearch />
          </Icon>
          <SubscribeButton>INICIAR SESION</SubscribeButton>
        </RightSection>
      </HeaderContainer>
    </ResponsiveContainer>
  );
};

const ResponsiveContainer = styled(BaseContainer)`
  padding: 30px 0;
`;

const HeaderContainer = styled.header`
  background-color: white;
  border-radius: 32px;
  color: #262522;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 10px;
  border-radius: 50%;
  border: 1px solid white;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 15px;
  margin: 0;
  line-height: normal;
  font-weight: 600;
`;

const RightSection = styled.div`
  display: flex;
`;

const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242424;
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const CenterSection = styled.div`
  display: flex;
  font-size: 12px;
  gap: 10px;
`;

const MarginSection = styled.div`
  margin-right: 10px;
  text-decoration: none;
  position: relative;
  color: inherit;
  &::after {
    content: ""; /* Agregar un pseudo-elemento para representar el subrayado */
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 2px; /* Grosor del subrayado */
    background-color: transparent;
    transition: background-color 0.3s ease;
  }
  &:hover::after {
    background-color: #f3c301; /* Cambiar el color del subrayado al hacer hover */
  }
`;

const SubscribeButton = styled.button`
  background-color: #87C159;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
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
