import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

export const Head = () => {
  return (
    <div>
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
            <Link to="/">HOME</Link> {" | "}
          </MarginSection>
          <MarginSection>
            <Link to="/login">RECETAS</Link> {" | "}
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">TIPOS DE COCINA</Link>
            {" | "}
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">SOBRE NOSOTROS</Link>{" "}
          </MarginSection>
        </CenterSection>
        <RightSection>
          <Icon href="https://www.facebook.com">
            <IoSearch />
          </Icon>
          <SubscribeButton>suscribirse</SubscribeButton>
        </RightSection>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled.header`
  background-color: white;
  border-radius: 28px;
  color: #242424;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 824px;
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
`;

const Text = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: normal;
`;

const RightSection = styled.div`
  display: flex;
`;

const Icon = styled.a`
  color: #242424;
  font-size: 1.5rem;
  margin: 0 0.5rem;
`;

const CenterSection = styled.div`
  display: flex;
  font-size: 12px;
`;

const MarginSection = styled.div`
  margin-right: 10px;
`;

const SubscribeButton = styled.button`
  background-color: #80c160; /* Fondo de color */
  color: #ffffff; /* Letras blancas */
  border: none; /* Sin borde */
  border-radius: 20px; /* Bordes redondeados */
  padding: 10px 20px; /* Ajusta el padding según sea necesario */
  font-size: 1rem; /* Tamaño de letra */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  transition: background-color 0.3s ease; /* Transición suave para el cambio de color de fondo */
  text-transform: uppercase;
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