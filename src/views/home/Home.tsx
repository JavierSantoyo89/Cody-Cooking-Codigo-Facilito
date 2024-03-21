import { useEffect, useState } from "react";
import { Loading } from "../../components/loadin/Loading";
import { Footer } from "../../components/parcials/footer/Footer";
import { Head } from "../../components/parcials/header/Head";
import {useDataFetch,isLoading, data, getFetch } from "../../data/useDataFetch";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // useDataFetch()
  useEffect(() => {
    console.log(isLoading);
    getFetch()
    console.log(getFetch());
    
    isLoading ? setIsLoading(false): null
  },[])
  return (
    <div>
      <Head />
      <h1>Home</h1>
      {isLoading === true ? <Loading /> : null}
      <Footer />
    </div>
  );
};
