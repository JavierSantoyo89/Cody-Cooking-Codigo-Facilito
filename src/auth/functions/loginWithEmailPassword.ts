import { auth } from "../credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

//*****  Login when you already have an account ***** //

export default async function loginWithEmailPassword(
  { email }: { email: string },
  { password }: { password: string },
): Promise<boolean> {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    return false;
  }
}
