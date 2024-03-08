import { create } from "zustand";

export const useUser = create((set) => ({
    user: String || {},
    setUser: (user: string) => set({ user: user }),
}))