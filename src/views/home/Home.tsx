import { useEffect, useState } from "react";
import { Loading } from "../../components/loadin/Loading";
import Main from "./mainContent/Main";
import { useUserStore } from "../../store/userState";
// import { useDataUsers, useUserNameStore } from "../../store/Users";
// import {useDataFetch,isLoading, data} from "../../data/useDataFetch";
export const Home = () => {
  // const name = useUserNameStore((state) => state.userName);
  const name = useUserStore((state) => state.user?.displayName);
  const email = useUserStore((state) => state.user?.email);
  const imgPerfil = useUserStore((state) => state.user?.photoURL);
  const uid= useUserStore((state) => state.user?.uid);
  const [isLoading, setIsLoading] = useState(true);
  // useDataFetch()
  useEffect(() => {
    // console.log(isLoading);
    isLoading ? setIsLoading(false) : null;
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <p>{email}</p>
      <img src={imgPerfil} key={uid}/>
      <p>{uid}</p>
      {isLoading === true ? <Loading /> : null}
      <Main/>
    </div>
  );
};
