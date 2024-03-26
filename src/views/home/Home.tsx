import { useEffect, useState } from "react";
import { Loading } from "../../components/loadin/Loading";
import { Footer } from "../../components/parcials/footer/Footer";
import { Head } from "../../components/parcials/header/Head";
import Main from "../../components/parcials/main/Main";
// import {useDataFetch,isLoading, data} from "../../data/useDataFetch";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // useDataFetch()
  useEffect(() => {
    console.log(isLoading);
    
    isLoading ? setIsLoading(false): null
  },[])
  return (
    <div>
      <Head />
      {/* <h1>Home</h1> */}
      {isLoading === true ? <Loading /> : null}
      <Main/>
      <Footer />
    </div>
  );
};
