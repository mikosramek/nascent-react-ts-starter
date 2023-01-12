import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

interface State {
  user: User;
  setUser: (newUser: User) => void;
}

export const useUserStore = create<State>()(
  devtools(
    (set, get) => ({
      user: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
      },
      setUser: (newUser: User) => set(() => ({ user: newUser })),
    }),
    {
      name: "user-store",
    }
  )
);
