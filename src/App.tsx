import { useEffect } from "react";
import "./App.css";
import { onAuthStateChanged, } from "firebase/auth";
import { auth } from "./firebase/credentials";
import Routes from "./routes/routes";
import { useUserStore } from "./store/userState";

export default function App() {
  const { setUser, setUserName, setEmail, setPhotoURL,setUid } = useUserStore();


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
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
  });

  return () => unsubscribe();

}, [setUser]);

return <Routes />;
}
    




//   const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//       console.log(firebaseUser?.displayName);
//       console.log(firebaseUser?.email);
//       console.log(firebaseUser?.photoURL);
//       console.log(firebaseUser?.uid);
//     });

//     return () => unsubscribe();



//     // const unsubscribe = onAuthStateChanged(auth, (user) => {
//     //   if (user) {
//     //     setUser(user);
//     //     // El usuario está autenticado
//     //     console.log('Usuario autenticado:', user);
//     //   } else {
//     //     // No hay usuario autenticado
//     //     console.log('No hay usuario autenticado');
//     //   }
//     // });
    
//     // // Luego, cuando quieras cancelar la suscripción, simplemente llama a unsubscribe
//     // unsubscribe();
//   }, [setUser]);

//   return <Routes />;
// }
