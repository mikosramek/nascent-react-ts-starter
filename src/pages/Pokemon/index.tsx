import { PokemonFilters } from "components/pokemon/PokemonFilters";
import { PokemonList } from "components/pokemon/PokemonList";
import { LoadingIndicator } from "components/shared/LoadingIndicator";
import { usePokemon } from "hooks/api/usePokemon";
import { Wrapper, Heading } from "styles/shared";

export const Pokemon = () => {
  const { fetchedPokemonRefs } = usePokemon();
  return (
    <Wrapper>
      <Heading>Choose your favourite Gen 1 Pokemon</Heading>
      {!fetchedPokemonRefs && <LoadingIndicator />}
      {!!fetchedPokemonRefs && (
        <>
          {/* TODO Chosen Pokemon */}
          <PokemonFilters />
          <PokemonList />
        </>
      )}
    </Wrapper>
  );
};
