import { auth } from "../credentials";
import { createUserWithEmailAndPassword } from "firebase/auth";

//!***** Create User manual ***** //
export default async function registerUser(
  { email }: { email: string },
  { password }: { password: string },
): Promise<boolean> {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return true;
    console.log("Usuario creado:");
  } catch (error) {
    console.log("Error al cargar email y password: ", error);
    return false;
  }
}
