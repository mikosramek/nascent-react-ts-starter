import { ValidColorType } from "utils/general";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export type PokemonRef = Record<string, { url: string }>;

export type PokemonType = { type: { name: string; url: string } };

export type PokemonData = {
  name: string;
  sprites: { front_default: string };
  types: PokemonType[];
};

type PokemonMap = Record<string, PokemonData>;

export type TypeFilter = ValidColorType | "";

interface State {
  pokemonRefs: PokemonRef;
  setPokemonRefs: (pokemon: PokemonRef) => void;
  fetchedPokemonRefs: boolean;
  pokemon: PokemonMap;
  setPokemon: (newPokemon: PokemonData) => void;
  getPokemon: (name: string) => PokemonData | null;
  pokemonNameFilter: string;
  pokemonTypeFilter: TypeFilter;
  setFilter: (name?: string, type?: TypeFilter) => void;
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
      pokemonNameFilter: "",
      pokemonTypeFilter: "",
      setFilter: (name?: string, type?: TypeFilter) =>
        set(() => ({
          ...(name !== undefined ? { pokemonNameFilter: name } : {}),
          ...(type !== undefined ? { pokemonTypeFilter: type } : {}),
        })),
    }),
    { name: "pokemon-state" }
  )
);
