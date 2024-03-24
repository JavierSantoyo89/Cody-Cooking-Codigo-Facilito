import { useEffect, useState } from "react";
import { Loading } from "../../components/loadin/Loading";

// import {useDataFetch,isLoading, data} from "../../data/useDataFetch";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  // useDataFetch()
  useEffect(() => {
    console.log(isLoading);

    isLoading ? setIsLoading(false) : null;
  }, []);
  return (
    <div>
      <h1>Home ...</h1>
      {isLoading === true ? <Loading /> : null}
    </div>
  );
};
