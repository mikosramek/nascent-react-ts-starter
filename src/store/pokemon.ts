import create from "zustand";
import { devtools } from "zustand/middleware";

export type PokemonRef = Record<string, { url: string }>;

type PokemonData = {
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string; url: string } }[];
};

type PokemonMap = Record<string, PokemonData>;

interface State {
  pokemonRefs: PokemonRef;
  setPokemonRefs: (pokemon: PokemonRef) => void;
  pokemon: PokemonMap;
  setPokemon: (newPokemon: PokemonData) => void;
  getPokemon: (name: string) => PokemonData | null;
}

export const usePokemonStore = create<State>()(
  devtools(
    (set, get) => ({
      pokemonRefs: {},
      setPokemonRefs: (pokemon: PokemonRef) =>
        set(() => ({ pokemonRefs: pokemon })),
      pokemon: {},
      setPokemon: (newPokemon: PokemonData) =>
        set((state) => ({
          pokemon: { ...state.pokemon, [newPokemon.name]: newPokemon },
        })),
      getPokemon: (name: string) => get().pokemon[name] || null,
    }),
    { name: "pokemon-state" }
  )
);
