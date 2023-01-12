import create from "zustand";
import { devtools } from "zustand/middleware";

export type PokemonRef = Record<string, { url: string }>;

export type PokemonType = { type: { name: string; url: string } };

export type PokemonData = {
  name: string;
  sprites: { front_default: string };
  types: PokemonType[];
};

type PokemonMap = Record<string, PokemonData>;

interface State {
  pokemonRefs: PokemonRef;
  setPokemonRefs: (pokemon: PokemonRef) => void;
  fetchedPokemonRefs: boolean;
  pokemon: PokemonMap;
  setPokemon: (newPokemon: PokemonData) => void;
  getPokemon: (name: string) => PokemonData | null;
}

export const usePokemonStore = create<State>()(
  devtools(
    (set, get) => ({
      pokemonRefs: {},
      fetchedPokemonRefs: false,
      setPokemonRefs: (pokemon: PokemonRef) =>
        set(() => ({ pokemonRefs: pokemon, fetchedPokemonRefs: true })),
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
