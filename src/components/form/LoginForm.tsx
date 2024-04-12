import { useState } from "react";
import styled from "styled-components";
import MainWrapper from "../common/MainWrapper";
import { Title as BaseTitle } from "../common/titles";
import { GridDetailContainer } from "../common/ui";
import {
  Button as BaseButton,
  Link as BaseLink,
  Paragraph as BaseParagraph,
  Clear,
} from "../common/ui";
import { useForm, SubmitHandler } from "react-hook-form";
import { useUserStore } from "../../store/userState";
import loginWithEmailPassword from "../../functions/loginWithEmailPassword";
import registerUser from "../../functions/registerUser";
// import { mainStylis } from "styled-components/dist/models/StyleSheetManager";
import loginWithGoogle from "../../functions/loginWithGoogle";
import cody from "../../assets/imgs/Cody.svg";
import googleLogo from '../../assets/icons/GoogleLogo.svg'
const Login = () => {
  const [isUser, setIsUser] = useState(true);

  const toogleIsUser = () => {
    setIsUser((currentValue: boolean) => !currentValue);
  };

  type Inputs = {
    email: string;
    password: string;
    userName?: string | null;
    name?: string;
    userEmail?: string;
  };

  const { register, handleSubmit } = useForm<Inputs>();
  const { setUserName } = useUserStore();
  const { setEmail } = useUserStore();

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();

    let userName = data.name;
    const email = data.email;
    const password = data.password;
    // console.log("voila", email, password);

    if (!isUser) {
      // console.log("entro a registrar usuario");
      // console.log(data);
      userName = "Invitado";
      setUserName(userName);
      setEmail(email);
      registerUser({ email }, { password });
    } else {
      // console.log("entro a login");
      loginWithEmailPassword({ email }, { password });
    }
  };
  return (
    <MainWrapper>
      <div>
        <Title>{isUser ? "¡Bienvenido!" : "Regístro de usuario"}</Title>
        <GridDetailContainer>
          <LeftContainer>
            <FormElement onSubmit={handleSubmit(onSubmit)}>
              {!isUser && <label htmlFor="name">Nombre</label>}
              {!isUser && (
                <Input
                  id="name"
                  placeholder="Nombre"
                  {...register("name", { required: true })}
                />
              )}
              <Input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <Input
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />
              <Clear />
              <Button>{isUser ? "Login" : "Crear cuenta"}</Button>
              {isUser && (
                <>
                  <ParagraphLeft>-O bien-</ParagraphLeft>
                  <GoogleButton onClick={loginWithGoogle}>
                    <GoogleIcon src={googleLogo} /> Acceder con
                    Google
                  </GoogleButton>
                </>
              )}
            </FormElement>
          </LeftContainer>
          <RightContainer>
            <CodyImage src={cody} />
            {isUser ? (
              <>
                <Paragraph>
                  ¿Aún no tienes cuenta? <br />
                  <Link onClick={toogleIsUser}>Regístrate</Link>
                </Paragraph>
              </>
            ) : (
              <Paragraph>
                ¿Ya tienes cuenta?{" "}
                <Link onClick={toogleIsUser}>Volver al Login</Link>
              </Paragraph>
            )}
          </RightContainer>
        </GridDetailContainer>
      </div>
    </MainWrapper>
  );
};

//#region Styles
const Title = styled(BaseTitle)`
  color: #262522;
  margin-bottom: 50px;
  text-align: center;
`;

const FormElement = styled.form`
  width: 100%;
`;

const Input = styled.input`
  color: #50504d;
  background: transparent;
  /* min-width: 300px; */
  width: 100%;
  height: 50px;
  border-radius: 57px;
  border: 1px solid #50504d;
  display: block;
  padding: 10px;
  margin-bottom: 40px;
`;

const Button = styled(BaseButton)`
  background: #87c159;
  color: #fafafa;
  width: 100%;
  transition: 0.5s all ease-in-out;
  &:hover {
    scale: 1.2;
  }
`;

const Link = styled(BaseLink)`
  display: inline-block;
  color: #f3c301;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  transition: 0.5s all ease-in-out;
  &:hover {
    scale: 1.3;
  }
`;

const Paragraph = styled(BaseParagraph)`
  display: inline-block;
  color: #262522;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

const ParagraphLeft = styled.p`
  color: #262522;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 10px;
`;

const GoogleButton = styled.button`
  display: block;
  color: rgba(0, 0, 0, 0.54);
  background-color: #fafafa;
  width: 55%;
  font-family: "Roboto";
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08),
    0px 2px 3px 0px rgba(0, 0, 0, 0.17);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: 0.5s all ease-in-out;
  &:hover {
    scale: 1.3;
  }
`;

const GoogleIcon = styled.img``;
const CodyImage = styled.img`
  width: 250px;
  height: 250px;
  mask-image: linear-gradient(157deg, #2b2b2b 80%, transparent);
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
//#endregion
export default Login;
