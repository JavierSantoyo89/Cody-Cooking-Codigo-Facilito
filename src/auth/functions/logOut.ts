import { auth } from "../credentials";
import { signOut } from "firebase/auth";

//*****  Log Out ***** //
export default async function logOut() {
  try {
    const user = await signOut(auth);
    console.log("Usuario desconectado: ", user);
  } catch (error) {
    console.log("Error al desconectarse: ", error);
  }
}
