import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import { loginWithGoogle } from "../../functions/loginWithGoogle";
import cody from "../../assets/imgs/Cody.svg";
import googleLogo from "../../assets/icons/GoogleLogo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  email: string;
  password: string;
  userName?: string | null;
  name?: string;
  userEmail?: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(true);
  const [failedLogin, setFailedLogin] = useState(false);

  const toogleIsUser = () => {
    setIsUser((currentValue: boolean) => !currentValue);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Inputs>();

  const { setUserName, setEmail, setAfterLogin } = useUserStore();
  const isLogged = useUserStore((state) => state.isLogged);

  const onSubmit: SubmitHandler<Inputs> = async (data, event) => {
    event?.preventDefault();

    let userName = data.name;
    const email = data.email;
    const password = data.password;

    if (!isUser) {
      userName = "Invitado";
      setUserName(userName);
      setEmail(email);
      const registeredUser = await registerUser({ email }, { password });
      {
        registeredUser == false ? notifyCredentials() : null;
      }
      setAfterLogin(true);
    } else {
      const userLoggedSuccessfully = await loginWithEmailPassword(
        { email },
        { password }
      );
      setFailedLogin(!userLoggedSuccessfully);
      {
        userLoggedSuccessfully == false ? notifyCredentials() : null;
      }
      setAfterLogin(true);
    }
  };

  useEffect(() => {
    {
      errors.email ? notifyMail() : null;
    }
    {
      errors.password ? notifypassword() : null;
    }
    {
      errors.name ? notifyname() : null;
    }
  }, [errors.name, errors.email, errors.password]);

  function notifyMail() {
    toast.info(
      `.... Ingresa un correo valido .... \n Debe tener Mínimo 5 caracteres \n example@codycooking.com`,
      { icon: () => <img src={cody} height={42} alt="cody" /> }
    );
  }
  function notifypassword() {
    toast.info(
      `....... Revisa tu password ....... \n Debe tener Mínimo 5 caracteres `,
      { icon: () => <img src={cody} height={40} alt="cody" /> }
    );
  }
  function notifyname() {
    toast.info(
      `Ingresa tu nombre de usuario \n Debe tener Mínimo 5 caracteres \n`,
      { icon: () => <img src={cody} height={40} alt="cody" /> }
    );
  }

  function notifyCredentials() {
    toast.info("Usuario y/o contraseña erroneos", {
      icon: () => <img src={cody} height={40} alt="cody" />,
    });
  }

  useEffect(() => {
    if (isLogged) navigate(`/`);
  }, [navigate, isLogged]);

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
                  {...register("name", { required: true, minLength: 5 })}
                />
              )}
              <Input
                type="email"
                id="email"
                placeholder="Correo electrónico"
                {...register("email", { required: true, minLength: 5 })}
              />
              <Input
                type="password"
                id="password"
                placeholder="Contraseña"
                {...register("password", { required: true })}
              />

              <Clear />
              {failedLogin && (
                <ErrorMessage>Error al cargar email o password</ErrorMessage>
              )}
              <Button>{isUser ? "Iniciar sesión" : "Crear cuenta"}</Button>
              {isUser && (
                <>
                  <SeparatorContainer>
                    <SeparatorLine />
                    <SeparatorText>o</SeparatorText>
                    <SeparatorLine />
                  </SeparatorContainer>
                  <GoogleButton onClick={loginWithGoogle}>
                    <GoogleIcon src={googleLogo} /> Acceder con Google
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </MainWrapper>
  );
};

//#region Styles
const Title = styled(BaseTitle)`
  color: #058240;
  margin-bottom: 50px;
  text-align: center;
`;

const FormElement = styled.form`
  width: 100%;
`;

const Input = styled.input`
  color: #50504d;
  background: transparent;
  width: 100%;
  height: 42px;
  border-radius: 30px;
  border: 1px solid #50504d;
  display: block;
  padding: 0.75rem 1rem;
  margin-bottom: 40px;
  outline: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.1);
  }
`;

const Button = styled(BaseButton)`
  background: #87c159;
  color: #fafafa;
  width: 100%;
  height: 42px;
  font-size: 1em;
  transition: 0.5s all ease-in-out;
  &:hover {
    opacity: 0.8;
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

const GoogleButton = styled.button`
  display: block;
  color: rgba(0, 0, 0, 0.54);
  background-color: #fafafa;
  width: 100%;
  font-family: "Roboto";
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.08),
    0px 2px 3px 0px rgba(0, 0, 0, 0.17);
  border-radius: 30px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #eee;
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

const ErrorMessage = styled(BaseParagraph)`
  color: red;
  margin-bottom: 20px;
`;

const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SeparatorLine = styled.hr`
  flex: 0 0 33.33%;
  border: 1px solid #ddd;
`;

const SeparatorText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #333;
`;

//#endregion
export default Login;
