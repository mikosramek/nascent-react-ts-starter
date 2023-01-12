import { FormInput } from "components/shared/FormInput";
import React from "react";
import {
  usePokemonStore,
  TypeFilter,
  filterModes,
  FilterMode,
} from "store/pokemon";
import { typeNames } from "utils/general";

import * as Styled from "./PokemonFilters.styled";

export const PokemonFilters = () => {
  const setFilter = usePokemonStore((state) => state.setFilter);
  const pokemonNameFilter = usePokemonStore((state) => state.pokemonNameFilter);
  const pokemonTypeFilter = usePokemonStore((state) => state.pokemonTypeFilter);
  const pokemonTypeFilterMode = usePokemonStore(
    (state) => state.pokemonTypeFilterMode
  );

  return (
    <Styled.Form>
      <FormInput
        inputName="name-search"
        label="Search by name"
        value={pokemonNameFilter}
        onChange={(_name, input) => setFilter(input)}
        placeholder="Bulbasaur"
      />
      <Styled.Fieldset>
        <Styled.Legend>Search by type:</Styled.Legend>
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
        {Object.keys(filterModes).map((filterType, index) => {
          return (
            <React.Fragment key={`filter-mode-${index}`}>
              <Styled.RadioButton
                type="radio"
                name="type-mode"
                id={`type-mode-${filterType}`}
                className="visually-hidden"
                value={filterType}
                checked={filterType === pokemonTypeFilterMode}
                onChange={(e) =>
                  setFilter(undefined, undefined, e.target.value as FilterMode)
                }
              />
              <Styled.RadioLabel htmlFor={`type-mode-${filterType}`}>
                {filterType}
              </Styled.RadioLabel>
            </React.Fragment>
          );
        })}
      </Styled.Fieldset>
    </Styled.Form>
  );
};
