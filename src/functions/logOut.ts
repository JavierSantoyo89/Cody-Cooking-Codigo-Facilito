import { auth } from "../firebase/credentials";
import { signOut } from "firebase/auth";

//*****  Log Out ***** //
export default async function logOut() {
  try {
    const user = await signOut(auth);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
