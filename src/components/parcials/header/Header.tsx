import { Link } from "react-router-dom";
import HeartIcon from "../../common/icons/HeartIcon";
import useFavorites from "../../../hooks/useFavorites";
import logOut from "../../../functions/logOut";
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
} from "./styles";
import { useUserStore } from "../../../store/userState";
export const Header = () => {
  const mail: string | null = useUserStore((state) => state.uid);
  const { numberFavorites } = useFavorites();
  const reset = useUserStore((state) => state.reset);
  const handleLogOut = () => {
    logOut();
    reset();
  };
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
            
            
        {mail != null ?  
          <Link to="/favorites">
          <Icon>
              <NumberFavorites>{numberFavorites}</NumberFavorites>
              <HeartIcon fill="#058240" height="30px" width="30px" />
            </Icon>
          </Link>
 : null}

          <SubscribeButton>
            <Link to="/login">INICIAR SESION</Link>
          </SubscribeButton>
        </RightSection>
        {mail != null ? <button onClick={handleLogOut}>Log out</button> : null}
      </HeaderContainer>
    </ResponsiveContainer>
  );
};
