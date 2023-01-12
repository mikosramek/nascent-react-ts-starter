import { InnerPokemonCardProps } from "components/pokemon/PokemonCard/InnerPokemonCard";
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
  getIsPokemonFetched: (name: string) => boolean;
  pokemonNameFilter: string;
  pokemonTypeFilter: TypeFilter;
  setFilter: (name?: string, type?: TypeFilter) => void;
  chosenPokemonRef: InnerPokemonCardProps;
  setChosenPokemonRef: ({ name, sprite, types }: InnerPokemonCardProps) => void;
}

type FilterProps = {
  pokemon: PokemonData;
  pokemonNameFilter: string;
  pokemonTypeFilter: TypeFilter;
};
const filterPokemon = ({
  pokemon,
  pokemonNameFilter,
  pokemonTypeFilter,
}: FilterProps) => {
  const { name, types } = pokemon;
  let shouldFilter = false;

  if (pokemonNameFilter !== "") {
    const nameRegex = new RegExp(pokemonNameFilter, "gi");
    if (!nameRegex.test(name)) {
      shouldFilter = true;
    }
  }

  if (pokemonTypeFilter !== "") {
    const pokemonTypes = types.reduce(
      (total, current) => total + current.type.name,
      ""
    ); // results in string like `grasspoison`
    const typeRegex = new RegExp(pokemonTypeFilter, "gi");
    if (!typeRegex.test(pokemonTypes)) {
      shouldFilter = true;
    }
  }

  return shouldFilter ? null : pokemon;
};

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
      getIsPokemonFetched: (name: string) => !!get().pokemon[name],
      getPokemon: (name: string) => {
        const { pokemonNameFilter, pokemonTypeFilter } = get();
        const pokemonExists = !!get().pokemon[name];

        if (!pokemonExists) return null;

        return filterPokemon({
          pokemon: get().pokemon[name],
          pokemonNameFilter,
          pokemonTypeFilter,
        });
      },
      pokemonNameFilter: "",
      pokemonTypeFilter: "",
      setFilter: (name?: string, type?: TypeFilter) =>
        set(() => ({
          ...(name !== undefined ? { pokemonNameFilter: name } : {}),
          ...(type !== undefined ? { pokemonTypeFilter: type } : {}),
        })),
      chosenPokemonRef: {},
      setChosenPokemonRef: ({
        name = "",
        sprite = "",
        types = [],
      }: InnerPokemonCardProps) =>
        set(() => ({ chosenPokemonRef: { name, sprite, types } })),
    }),
    { name: "pokemon-state" }
  )
);
