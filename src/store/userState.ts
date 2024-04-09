import {create} from "zustand";

interface UserState {
user: string | null;
setUser: (user: string | null) => void;
email: string | null;
setEmail: (email: string | null) => void;
photoURL: string | null;
setPhotoURL: (photoURL: string | null) => void;
uid: string | null;
setUid: (uid: string | null) => void;
reset: () => void;
displayName?: string | null;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  email: null,
  setEmail: (email) => set({ email }),
  photoURL: null,
  setPhotoURL: (photoURL) => set({ photoURL }),
  uid: null,
  setUid: (uid) => set({ uid }),
  reset: () => set({ user: null, email: null, photoURL: null, uid: null }),
}));
