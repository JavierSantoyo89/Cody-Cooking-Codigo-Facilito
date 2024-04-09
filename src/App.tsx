import { useEffect } from "react";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/credentials";
import Routes from "./routes/routes";
import { useUserStore } from "./store/userState";

export default function App() {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser );
      console.log(firebaseUser?.displayName);
      console.log(firebaseUser?.email);
      console.log(firebaseUser?.photoURL);
      console.log(firebaseUser?.uid);
    });

    return () => unsubscribe();



    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setUser(user);
    //     // El usuario está autenticado
    //     console.log('Usuario autenticado:', user);
    //   } else {
    //     // No hay usuario autenticado
    //     console.log('No hay usuario autenticado');
    //   }
    // });
    
    // // Luego, cuando quieras cancelar la suscripción, simplemente llama a unsubscribe
    // unsubscribe();
  }, [setUser]);

  return <Routes />;
}
