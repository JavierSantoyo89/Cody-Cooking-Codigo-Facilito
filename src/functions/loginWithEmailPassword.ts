import { auth } from "../firebase/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

//*****  Login when you already have an account ***** //

export default async function loginWithEmailPassword(
  { email }: { email: string },
  { password }: { password: string }
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const user = await signInWithEmailAndPassword(auth, email, password);
    // console.log( user);
  } catch (error) {
    console.log("Error al cargar email y password: ",error);
  }
}
