import { useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import { Link } from "react-router-dom";
import agustin from "../../assets/imgs/Agustin.jpg";
import javier from "../../assets/imgs/Javier.jpg";
import mayra from "../../assets/imgs/Mayra.jpg";
import jose from "../../assets/imgs/CodyAngry.png";
export const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    isLoading ? setIsLoading(false) : null;
  }, [isLoading]);

  return (
    <div>
      {isLoading === true ? <Loading /> : null}
      About
      <table>
        <tbody>
          <tr>
            <td>
              <img src={agustin} alt="Agustin" width="280px" />
              Agustín Sebastián Piuca Quevedo
            </td>
            <td align="center">
              Soy una persona recien graduada de la Tecnicatura de ingeniería en
              sistemas y me interesa mucho el área del Frontend, tengo
              conocimientos bastante amplios en tecnologías como HTML, CSS,
              Javascript, React entre otros. Actualmente me sigo formando como
              Frontend Developer para poder ejercer funciones de dicho stack y
              sacar proyectos adelante de la mano de personas con otros
              perfiles. Tengo mucha curiosidad por el lado del Diseño UX/UI para
              poder crear interfaces bastante funcionales y llamativas de cara a
              los usuarios, y así lograr un perfíl de UI Developer, por lo que
              tambien estoy viendo bastante material relacionado a ello.
            </td>
          </tr>
          <tr>
            <td align="center">
              <Link
                to="https://www.linkedin.com/in/agustin-sebastian-piuca-quevedo"
                target="_blank"
              >
                Linkedin
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={javier} alt="Javier" width="280px" />
              Francisco Javier Santoyo Rios
            </td>
            <td align="center">
              Soy desarrollador web Full Stack especializado en backend,
              frontend y testing, titulado en LTI. A pesar de tener una
              discapacidad motriz, busco oportunidades de desarrollo remoto.
              Tengo experiencia en proyectos remotos, trabajando con
              responsabilidad, en equipo y siguiendo las políticas de privacidad
              del cliente/empresa. Estoy comprometido con ofrecer soluciones de
              calidad en el desarrollo web.
            </td>
          </tr>
          <tr>
            <td align="center">
              <Link
                to="https://www.linkedin.com/in/javiersantoyor/"
                target="_blank"
              >
                Linkedin
              </Link>
              <Link to="https://javiersantoyo.dev/" target="_blank">
                Portafolio
              </Link>
              <Link to="https://twitter.com/FcoSantoyoRios">Twitter( X )</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={mayra} alt="Mayra" width="305px" />
              Mayra Macedo
            </td>
            <td align="center">
              ¡Hola! Soy una desarrolladora front . Siempre dispuesta a aprender
              cosas nuevas, a sumergirme en nuevos desafíos y tecnologías para
              mejorar mis habilidades y contribuir al desarrollo de soluciones
              web innovadoras 🙌 ✨.
            </td>
          </tr>
          <tr>
            <td align="center">
              <Link to="https://www.linkedin.com/in/vanessa-macedo-huaman?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                Linkedin
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>
              <img src={jose} alt="Javier" width="280px" />
              Jose Montenegro Garzón
            </td>
            <td align="center">
              Buen programador pero no da mucha informacion sobre el
            </td>
          </tr>
          <tr>
            <td align="center">
              <Link to="https://www.linkedin.com">Linkedin</Link>
              <p>mail: josemoga83@gmail.com</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
