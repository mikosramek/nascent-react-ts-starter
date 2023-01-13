import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { InnerPokemonCardProps } from "components/pokemon/PokemonCard/InnerPokemonCard";

export type User = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
};

interface State {
  user: User;
  setUser: (newUser: User) => void;
  updateUser: (key: string, value: string) => void;
  clearUser: () => void;
  chosenPokemonRef: InnerPokemonCardProps;
  setChosenPokemonRef: ({ name, sprite, types }: InnerPokemonCardProps) => void;
}

const userBaseState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  address: "",
};

export const useUserStore = create<State>()(
  devtools(
    persist(
      (set, get) => ({
        user: userBaseState,
        setUser: (newUser: User) => set(() => ({ user: newUser })),
        updateUser: (key: string, value: string) =>
          set((state) => ({ user: { ...state.user, [key]: value } })),
        clearUser: () => set(() => ({ user: userBaseState })),
        chosenPokemonRef: {},
        setChosenPokemonRef: ({
          name = "",
          sprite = "",
          types = [],
        }: InnerPokemonCardProps) =>
          set(() => ({ chosenPokemonRef: { name, sprite, types } })),
      }),
      {
        name: "user-store",
      }
    )
  )
);
