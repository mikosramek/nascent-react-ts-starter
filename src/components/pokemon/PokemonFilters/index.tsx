import { usePokemonStore, TypeFilter } from "store/pokemon";
import { typeNames } from "utils/general";

export const PokemonFilters = () => {
  const setFilter = usePokemonStore((state) => state.setFilter);
  const pokemonNameFilter = usePokemonStore((state) => state.pokemonNameFilter);
  const pokemonTypeFilter = usePokemonStore((state) => state.pokemonTypeFilter);

  return (
    <form>
      <legend>Filter</legend>
      <input
        type="text"
        id="name-search"
        name="name-search"
        value={pokemonNameFilter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Bulbasaur"
      />
      <select
        name="type"
        id="type"
        onChange={(e) => setFilter(undefined, e.target.value as TypeFilter)}
        value={pokemonTypeFilter}
      >
        <option value="">Filter by type</option>
        {typeNames.map((type, index) => (
          <option value={type} key={`type-filter-${index}`}>
            {type}
          </option>
        ))}
      </select>
    </form>
  );
};
