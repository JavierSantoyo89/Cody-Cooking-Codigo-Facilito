import { Footer } from "../../components/parcials/footer/Footer";
import { Head } from "../../components/parcials/header/Head";
import  LoginForm  from "../../components/form/LoginForm";
export const Login = () => {
  return (
    <div>
      <Head />
      <h2>Login</h2>
      <LoginForm/>
      <Footer />
    </div>
  );
};
