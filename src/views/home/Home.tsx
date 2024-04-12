import { useEffect, useState } from "react";
import { Loading } from "../../components/loading/Loading";
import Main from "./mainContent/Main";
export const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // console.log(isLoading);
    isLoading ? setIsLoading(false) : null;
  }, []);
  return (
    <div>

      {isLoading === true ? <Loading /> : null}
      <Main/>
    </div>
  );
};
