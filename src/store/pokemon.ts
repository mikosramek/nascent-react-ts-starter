import create from "zustand";
import { devtools } from "zustand/middleware";

type PokemonRef = Record<string, { url: string }>;

type PokemonData = Record<
  string,
  {
    name: string;
    sprites: { front_default: string };
    types: { type: { name: string; url: string } }[];
  }
>;

interface State {
  hasFetchedInitial: boolean;
  pokemonRefs: PokemonRef[];
  pokemon: PokemonData[];
}

export const usePokemonStore = create<State>()(
  devtools(
    (set, get) => ({
      hasFetchedInitial: false,
      pokemonRefs: [],
      pokemon: [],
    }),
    { name: "pokemon-state" }
  )
);
