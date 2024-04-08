import { useEffect, useState } from "react";
import styled from "styled-components";
import MainWrapper from "../common/MainWrapper";
import { Title as BaseTitle } from "../common/titles";
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
import { mainStylis } from "styled-components/dist/models/StyleSheetManager";
const Title = styled(BaseTitle)`
  margin-bottom: 100px;
  text-align: center;
`;

const InputText = styled.input`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #9a9a9a;
  font-size: 16px;
  margin-bottom: 30px;
  padding: 8px;
  width: 100%;
`;

const Button = styled(BaseButton)`
  background: #9a9a9a;
  color: black;
`;

const Link = styled(BaseLink)`
  display: inline-block;
`;

const Paragraph = styled(BaseParagraph)`
  display: inline-block;
  margin-bottom: 10px;
`;

const Login = () => {
  const [isUser, setIsUser] = useState(true);

  const toogleIsUser = () => {
    setIsUser((currentValue: boolean) => !currentValue);
  };

  type Inputs = {
    email: string;
    password: string;
    userName?: string;
    name?: string;
    userEmail?: string;
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm<Inputs>();
  const {setUser} = useUserStore();
const {setEmail} = useUserStore()

  const onSubmit: SubmitHandler<Inputs> = (data, event) => {
    event?.preventDefault();
    const userName = data.name;
    const email = data.email;
    const password = data.password;
    // console.log("voila", email, password);

    if (!isUser) {
      console.log("entro a registrar usuario");
      console.log(data);
      setUser(userName);
      setEmail(email)
      registerUser({ email}, { password })
    
    } else {
      console.log("entro a login");
      loginWithEmailPassword({ email }, { password });
    }
  };
  return (
    <MainWrapper>
      <div>
        <Title>¡Bienvenido!</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          {!isUser && <label htmlFor="name">Nombre</label>}
          {!isUser && (
            <input id="name" {...register("name", { required: true })} />
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />
          <Button>{isUser ? "Login" : "Crear cuenta"}</Button>
          {isUser ? (
            <Paragraph>
              ¿Nuevo en recetas?{" "}
              <Link onClick={toogleIsUser}>Crear cuenta</Link>
            </Paragraph>
          ) : (
            <Paragraph>
              ¿Ya tienes cuenta? <Link onClick={toogleIsUser}>Ingresar</Link>
            </Paragraph>
          )}
          <Clear />
        </form>
      </div>
    </MainWrapper>
  );
};

export default Login;
