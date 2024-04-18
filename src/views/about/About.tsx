import { useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import { Title } from "../../components/common/titles";
import { FaTwitter } from "react-icons/fa6";
import MainWrapper from "../../components/common/MainWrapper";
import agustin from "../../assets/imgs/Agustin.jpg";
import javier from "../../assets/imgs/Javier.jpg";
import mayra from "../../assets/imgs/Mayra.jpg";
import jose from "../../assets/imgs/jose.jpg";
import styled from "styled-components";
export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isLoading ? setIsLoading(false) : null;
  }, [isLoading]);



  return (
    <MainWrapper>
      {isLoading === true ? <Loading /> : null}
      <CustomTitle>Sobre Nosotros</CustomTitle>
      <CustomGrid>
        <ImageContainer>
          <Image src={agustin} alt="Agustin" />
        </ImageContainer>
        <div>
          <PeopleName>Agustín Sebastián Piuca Quevedo</PeopleName>
          <PeopleDescription>
            Soy un desarrolador que le interesa mucho el área del Frontend, tengo
            conocimientos bastante amplios en tecnologías como HTML, CSS,
            y Javascript. Actualmente me sigo formando como
            Frontend Developer para poder ejercer funciones de dicho stack y
            sacar proyectos adelante de la mano de personas con otros
            perfiles, tambien tengo mucha curiosidad por el lado del Diseño UX/UI para
            crear interfaces de usuario increíbles.
          </PeopleDescription>

        </div>
        <SocialContainer>
          <Link
            to="https://www.linkedin.com/in/agustin-sebastian-piuca-quevedo"
            target="_blank"
          >
            <SocialLogo src="/src/assets/icons/linkedin-logo.svg" alt="linkedin-logo" />
          </Link>
        </SocialContainer>
      </CustomGrid>
      <CustomGrid>
        <ImageContainer>
          <Image src={javier} alt="Javier" />
        </ImageContainer>
        <div>
          <PeopleName>Francisco Javier Santoyo Rios</PeopleName>
          <PeopleDescription>
            Soy desarrollador web Full Stack especializado en backend,
            frontend y testing, titulado en LTI. A pesar de tener una
            discapacidad motriz, busco oportunidades de desarrollo remoto.
            Tengo experiencia en proyectos remotos, trabajando con
            responsabilidad, en equipo y siguiendo las políticas de privacidad
            del cliente/empresa. Estoy comprometido con ofrecer soluciones de
            calidad en el desarrollo web.
          </PeopleDescription>

        </div>
        <SocialContainer>
          <Link
            to="https://www.linkedin.com/in/javiersantoyor/"
            target="_blank"
          >
            <SocialLogo src="/src/assets/icons/linkedin-logo.svg" alt="linkedin-logo" />
          </Link>
          <Link
            to="https://twitter.com/FcoSantoyoRios"
            target="_blank"
          >
            <TwitterLogo/>
          </Link>
          <Link
            to="https://javiersantoyo.dev/"
            target="_blank"
          >
            <SocialLogo src="/src/assets/icons/portfolio-logo.svg" alt="" />
          </Link>
        </SocialContainer>
      </CustomGrid>
      <CustomGrid>
        <ImageContainer>
          <Image src={mayra} alt="Mayra" />
        </ImageContainer>
        <div>
          <PeopleName>Mayra Macedo</PeopleName>
          <PeopleDescription>
            ¡Hola! Soy una desarrolladora front . Siempre dispuesta a aprender
              cosas nuevas, a sumergirme en nuevos desafíos y tecnologías para
              mejorar mis habilidades y contribuir al desarrollo de soluciones
              web innovadoras 🙌 ✨.
          </PeopleDescription>

        </div>
        <SocialContainer>
          <Link
            to="https://www.linkedin.com/in/vanessa-macedo-huaman/"
            target="_blank"
          >
            <SocialLogo src="/src/assets/icons/linkedin-logo.svg" alt="linkedin-logo" />
          </Link>
        </SocialContainer>
      </CustomGrid>
      <CustomGrid>
        <ImageContainer>
          <Image src={jose} alt="Jose" />
        </ImageContainer>
        <div>
          <PeopleName>Jose Montenegro Garzón</PeopleName>
          <PeopleDescription>
            Soy publicista y diseñador gráfico de profesión, pero frontend de corazón.
            Cuento con varios años de experiencia en el desarrollo de aplicaciones crossbrowsing,
            principalmente con React. Me apasiona mantenerme actualizado y siempre estoy 
            dispuesto a ayudar y enseñar en todo lo que pueda.
          </PeopleDescription>

        </div>
        <SocialContainer>
          <Link
            to="https://www.linkedin.com/in/jose-montenegro-808b1b56/"
            target="_blank"
          >
            <SocialLogo src="/src/assets/icons/linkedin-logo.svg" alt="linkedin-logo" />
          </Link>
        </SocialContainer>
      </CustomGrid>
    </MainWrapper>
  );
};

const CustomTitle = styled(Title)`
  text-align: center;
  color: #058240;
  margin-bottom: 20px;

`

const TwitterLogo = styled(FaTwitter)`
  color: #00acee;
  width: 40px;
  height: 40px;

`

const CustomGrid = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 2px 12px 0px rgba(43, 43, 43, 0.25);
  border-radius: 10px;
  margin-bottom: 20px;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 875px) {
        display: inherit;
        /* margin: 0 5%; */
        padding: 20px;
        width: 90%;
  }

  
`

const ImageContainer = styled.figure`
  @media (max-width: 875px) {
      text-align: center;
    }
`

const Image = styled.img`
  width: 250px;
  height: 250px;
  box-shadow: 4px 4px 12px 0px rgba(43, 43, 43, 0.25);
  border-radius: 50%;
  
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    }
`
const PeopleName = styled.h3`
  color: #262522;
  font-size: 1.5rem;
`

const PeopleDescription = styled.p`
  padding-right: 10px;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`

const SocialLogo = styled.img`
  width: 40px;
  height: 40px;
`