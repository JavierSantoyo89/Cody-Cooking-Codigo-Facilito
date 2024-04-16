import { auth } from "../firebase/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

//*****  Login when you already have an account ***** //

export default async function loginWithEmailPassword(
  { email }: { email: string },
  { password }: { password: string }
): Promise<boolean> {
  try {
    // const user = 
    await signInWithEmailAndPassword(auth, email, password);
    return true;
    // console.log( user);
  } catch (error) {
    console.log("Error al cargar email y password: ",error);
    return false;
  }
}
