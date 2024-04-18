import styled from "styled-components";
import { ResponsiveContainer as BaseContainer } from "../../common/layout";

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

  @media (max-width: 960px) {
    gap: 20px;
    flex-direction: column;
  }
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
  align-items: center;
  display: flex;
  position: relative;
`;

const NumberFavorites = styled.div`
  background: #80c160;
  border-radius: 15px;
  color: #ffffff;
  font-size: 8px;
  font-weight: 600;
  height: 15px;
  left: -5px;
  line-height: 15px;
  position: absolute;
  text-align: center;
  width: 15px;
`;

const Icon = styled.div`
  margin-right: 10px;
`;

const CenterSection = styled.div`
  display: flex;
  font-size: 12px;
  gap: 10px;

  @media (max-width: 960px) {
    gap: 10px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    text-align: center;
  }
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
  background-color: #87c159;
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

export {
  ResponsiveContainer,
  HeaderContainer,
  LeftSection,
  Logo,
  TextContainer,
  Text,
  RightSection,
  Icon,
  CenterSection,
  MarginSection,
  SubscribeButton,
  NumberFavorites,
};
