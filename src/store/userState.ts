import { create } from "zustand";
import type { User } from "firebase/auth";

interface UserState {
  isLogged: boolean;
  setIsLogged: (isLogged: boolean) => void;
  user: User | null;
  setUser: (user: User | null) => void;
  userName: string | null;
  setUserName: (userName: string | null) => void;
  email: string | null;
  setEmail: (email: string | null) => void;
  photoURL: string | null;
  setPhotoURL: (photoURL: string | null) => void;
  uid: string | null;
  setUid: (uid: string | null) => void;
  afterLogin: boolean;
  setAfterLogin: (afterLogin: boolean) => void;
  reset: () => void;
  displayName?: string | null;
}

export const useUserStore = create<UserState>((set) => ({
  isLogged: false,
  setIsLogged: (isLogged) => set({ isLogged }),
  user: null,
  setUser: (user) => set({ user }),
  userName: null,
  setUserName: (userName) => set({ userName }),
  email: null,
  setEmail: (email) => set({ email }),
  photoURL: null,
  setPhotoURL: (photoURL) => set({ photoURL }),
  uid: null,
  setUid: (uid) => set({ uid }),
  afterLogin: true,
  setAfterLogin: (afterLogin) => set({ afterLogin }),
  reset: () =>
    set({
      isLogged: false,
      user: null,
      email: null,
      photoURL: null,
      uid: null,
      afterLogin: true,
    }),
}));
