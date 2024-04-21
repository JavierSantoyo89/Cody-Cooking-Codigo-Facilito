/* eslint-disable react-hooks/rules-of-hooks */

import { auth } from "../credentials";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

export async function loginWithGoogle(): Promise<boolean> {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
    return true;
  } catch (error) {
    return false;
  }
}
