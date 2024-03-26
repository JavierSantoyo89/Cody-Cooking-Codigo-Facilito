import { useState } from 'react';
import styled from 'styled-components';

import MainWrapper from '../common/MainWrapper';
import { Title as BaseTitle } from '../common/titles';
import { 
  Button as BaseButton, 
  Link as BaseLink, 
  Paragraph as BaseParagraph, 
  Clear 
} from '../common/ui'

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
  color: #9A9A9A;
  font-size: 16px;
  margin-bottom: 30px;
  padding: 8px;
  width: 100%;

`;

const Button = styled(BaseButton)`
  background: #9A9A9A;
  color: black;
`;

const Link = styled(BaseLink)`
  display: inline-block;
`;

const Paragraph = styled(BaseParagraph)`
  display: inline-block;
  margin-bottom: 10px;
`;


const Login = () =>  {
  const [isUser, setIsUser] = useState(true);
  
  const toogleIsUser = () => {
    setIsUser((currentValue: boolean) => !currentValue);
  }

  return (
    <MainWrapper>
      <div>
        <Title>
          ¡Bienvenido!
        </Title>
        <form>
          {!isUser && <InputText type="text" name="name" id="name" placeholder='Nombre' />}
          <InputText type="email" name="email" id="email" placeholder='Email' />
          <InputText type="password" name="password" id="password" placeholder='Contraseña' />

          {isUser 
            ? <Paragraph>¿Nuevo en recetas? <Link onClick={toogleIsUser}>Crear cuenta</Link></Paragraph>
            : <Paragraph>¿Ya tienes cuenta? <Link onClick={toogleIsUser}>Ingresar</Link></Paragraph>
          }

          <Clear />
          <Button>{isUser ? 'Login' : 'Crear cuenta'}</Button>
        </form>
      </div>
    </MainWrapper>
  );
}

export default Login;
