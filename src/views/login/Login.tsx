import  LoginForm  from "../../components/form/LoginForm";
import loginWithGoogle from "../../functions/loginWithGoogle";
const Login = () => {
  return (
    <>
    <LoginForm/>
    <button onClick={loginWithGoogle}>Accede con Google</button>
    </>
  );
};
export default  Login