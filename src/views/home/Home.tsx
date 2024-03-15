import { Loading } from "../../components/loadin/Loading";
import { Footer } from "../../components/parcials/footer/Footer";
import { Head } from "../../components/parcials/header/Head";

export const Home = () => {
  return (
    <div>
      <Head />
      <h1>Home</h1>
      <Loading/> {/*Solo para probar si funciona el loading */}
      <Footer />
    </div>
  );
};
