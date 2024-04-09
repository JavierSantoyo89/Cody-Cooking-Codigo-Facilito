import { auth } from "../firebase/credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";

//!***** Create User manual ***** //
export default async function registerUser(
  { email }: { email: string },
  { password }: { password: string }
) {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log("El email es: " + user.user.email);
    console.log("el UUID es: " + user.user.uid);
  } catch (error) {
    console.log(error);
  }
}
