import { useEffect, useState } from "react";
import { Loading } from "../../components/loadin/Loading";
import Main from "./mainContent/Main";

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
      {isLoading === true ? <Loading /> : null}
      <Main/>
    </div>
  );
};
