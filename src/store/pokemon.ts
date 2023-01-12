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

export const filterModes = {
  inclusive: "inclusive",
  exclusive: "exclusive",
  only: "only",
} as const;

export type FilterMode = keyof typeof filterModes;

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
  pokemonTypeFilterMode: FilterMode;
  setFilter: (name?: string, type?: TypeFilter, mode?: FilterMode) => void;
  chosenPokemonRef: InnerPokemonCardProps;
  setChosenPokemonRef: ({ name, sprite, types }: InnerPokemonCardProps) => void;
}

type FilterProps = {
  pokemon: PokemonData;
  pokemonNameFilter: string;
  pokemonTypeFilter: TypeFilter;
  pokemonTypeFilterMode: FilterMode;
};
const filterPokemon = ({
  pokemon,
  pokemonNameFilter,
  pokemonTypeFilter,
  pokemonTypeFilterMode,
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

    switch (pokemonTypeFilterMode) {
      case "exclusive":
        if (typeRegex.test(pokemonTypes)) shouldFilter = true;
        break;
      case "inclusive":
        if (!typeRegex.test(pokemonTypes)) shouldFilter = true;
        break;
      case "only":
        if (pokemonTypes !== pokemonTypeFilter) shouldFilter = true;
        break;
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
        const { pokemonNameFilter, pokemonTypeFilter, pokemonTypeFilterMode } =
          get();
        const pokemonExists = !!get().pokemon[name];

        if (!pokemonExists) return null;

        return filterPokemon({
          pokemon: get().pokemon[name],
          pokemonNameFilter,
          pokemonTypeFilter,
          pokemonTypeFilterMode,
        });
      },
      pokemonNameFilter: "",
      pokemonTypeFilter: "",
      pokemonTypeFilterMode: "inclusive",
      setFilter: (name?: string, type?: TypeFilter, mode?: FilterMode) =>
        set(() => ({
          ...(name !== undefined ? { pokemonNameFilter: name } : {}),
          ...(type !== undefined ? { pokemonTypeFilter: type } : {}),
          ...(mode !== undefined ? { pokemonTypeFilterMode: mode } : {}),
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
