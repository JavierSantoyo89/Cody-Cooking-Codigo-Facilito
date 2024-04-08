import { auth } from "../firebase/credentials";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export default async function loginWithGoogle() {
  try {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    console.log("Login exitoso");
  } catch (error) {
    console.log(error);
  }
}
