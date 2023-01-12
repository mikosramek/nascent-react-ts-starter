import { InnerPokemonCard } from "components/pokemon/PokemonCard/InnerPokemonCard";
import { PokemonFilters } from "components/pokemon/PokemonFilters";
import { PokemonList } from "components/pokemon/PokemonList";
import { LoadingIndicator } from "components/shared/LoadingIndicator";
import { usePokemon } from "hooks/api/usePokemon";
import { usePokemonStore } from "store/pokemon";
import { Wrapper, Heading } from "styles/shared";

import * as Styled from "./Pokemon.styled";

export const Pokemon = () => {
  const { fetchedPokemonRefs } = usePokemon();
  const chosenPokemonRef = usePokemonStore((state) => state.chosenPokemonRef);
  return (
    <Wrapper>
      <Heading>Choose your favourite Gen 1 Pokemon</Heading>
      {!fetchedPokemonRefs && <LoadingIndicator />}
      {!!fetchedPokemonRefs && (
        <>
          <Styled.ChosenPokemonCard>
            <InnerPokemonCard {...chosenPokemonRef} />
          </Styled.ChosenPokemonCard>
          <PokemonFilters />
          <PokemonList />
        </>
      )}
    </Wrapper>
  );
};
