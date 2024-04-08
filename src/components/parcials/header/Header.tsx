import { Link } from "react-router-dom";
import HeartIcon from '../../common/icons/HeartIcon';

import useFavorites from '../../../hooks/useFavorites';

import {
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
} from './styles'

export const Header = () => {

  const {numberFavorites} = useFavorites();

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
            <Link to="/recipes">RECETAS</Link>
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">TIPOS DE COCINA</Link>
          </MarginSection>
          <MarginSection>
            <Link to="/perfil">SOBER NOSOTROS</Link>
          </MarginSection>
        </CenterSection>
        <RightSection>
        <Link to="/favorites">
          <Icon>
            <NumberFavorites>
              {numberFavorites}
            </NumberFavorites>
            <HeartIcon
                fill="#058240"
                height="30px"
                width="30px"
            />
          </Icon>
        </Link>
          <SubscribeButton>INICIAR SESION</SubscribeButton>
        </RightSection>
      </HeaderContainer>
    </ResponsiveContainer>
  );
};
