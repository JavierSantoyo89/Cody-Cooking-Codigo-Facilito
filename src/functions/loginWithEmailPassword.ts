import { auth } from "../firebase/credentials";
import { signInWithEmailAndPassword } from "firebase/auth";

export default async function loginWithEmailPassword(
  { email }: { email: string },
  { password }: { password: string }
) {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
