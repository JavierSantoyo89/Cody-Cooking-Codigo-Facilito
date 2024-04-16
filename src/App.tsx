import { useEffect } from "react";
import Routes from "./routes/routes";
import { auth } from "./firebase/credentials";
import { useUserStore } from "./store/userState";
import { onAuthStateChanged, } from "firebase/auth";

import "./App.css";

export default function App() {
  const { 
    setIsLogged,
    setUser, 
    setUserName, 
    setEmail, 
    setPhotoURL,
    setUid 
  } = useUserStore();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log({
        firebaseUser
      })
      if (firebaseUser) {
        if (
          firebaseUser.displayName !== undefined &&
          firebaseUser.email !== undefined &&
          firebaseUser.photoURL !== undefined &&
          firebaseUser.uid !== undefined
        ) {
          setUser(firebaseUser)
          setUid (firebaseUser.uid)
          setEmail(firebaseUser.email)
          setUserName(firebaseUser.displayName)
          setPhotoURL(firebaseUser.photoURL)
        } else {
          console.error('Error: firebaseUser no tiene las propiedades necesarias.');
        }
        // console.log(firebaseUser.displayName);
        // console.log(firebaseUser.email);
        // console.log(firebaseUser.photoURL);
        // console.log(firebaseUser.uid);
      } else {
        setUser(null); 
      }
      setIsLogged(!!firebaseUser);
  });

  return () => unsubscribe();

  }, [setUser]);

return <Routes />;
}

