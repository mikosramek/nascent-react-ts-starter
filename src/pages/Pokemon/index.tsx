import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { InnerPokemonCard } from "components/pokemon/PokemonCard/InnerPokemonCard";
import { PokemonFilters } from "components/pokemon/PokemonFilters";
import { PokemonList } from "components/pokemon/PokemonList";
import { LoadingIndicator } from "components/shared/LoadingIndicator";
import { usePokemon } from "hooks/api/usePokemon";
import { usePokemonStore } from "store/pokemon";
import { Wrapper, Heading, Button } from "styles/shared";
import { STORED_POKEMON_KEY } from "utils/general";

import * as Styled from "./Pokemon.styled";

export const Pokemon = () => {
  const navigate = useNavigate();
  const { fetchedPokemonRefs } = usePokemon();
  const chosenPokemonRef = usePokemonStore((state) => state.chosenPokemonRef);
  const setChosenPokemonRef = usePokemonStore(
    (state) => state.setChosenPokemonRef
  );

  const navigateToReview = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const handleClearingPokemon = useCallback(() => {
    setChosenPokemonRef({});
    localStorage.setItem(STORED_POKEMON_KEY, JSON.stringify({}));
  }, [setChosenPokemonRef]);

  return (
    <Wrapper>
      <Heading>Choose your favourite Gen 1 Pokemon</Heading>
      {!fetchedPokemonRefs && <LoadingIndicator />}
      {!!fetchedPokemonRefs && (
        <>
          <Styled.ChosenWrapper>
            <Styled.ChosenPokemonCard>
              <InnerPokemonCard {...chosenPokemonRef} />
            </Styled.ChosenPokemonCard>
            <Styled.ButtonWrapper>
              <Button
                disabled={!chosenPokemonRef.name}
                onClick={navigateToReview}
              >
                Next
              </Button>
              <Button onClick={handleClearingPokemon}>
                Clear selected pokemon
              </Button>
            </Styled.ButtonWrapper>
          </Styled.ChosenWrapper>
          <PokemonFilters />
          <PokemonList />
        </>
      )}
    </Wrapper>
  );
};
