import { useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import Main from "./mainContent/Main";
import { useUserStore } from "../../store/userState";
import { ToastContainer, toast } from "react-toastify";
import cody from "../../assets/imgs/Cody.svg";

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { setAfterLogin, afterLogin } = useUserStore();
  useEffect(() => {
    if (afterLogin) {
      notifyCredentials();
      setAfterLogin(false);
      console.log("despues de validar", afterLogin);
    }
    isLoading ? setIsLoading(false) : null;
  }, []);

  function notifyCredentials() {
    toast.info("Bienvenido a Cody Cooking", {
      icon: () => <img src={cody} height={40} alt="cody" />,
    });
  }

  return (
    <div>
      {isLoading === true ? <Loading /> : null}
      <Main />
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
    </div>
  );
};

