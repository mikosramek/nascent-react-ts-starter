import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { InnerPokemonCard } from "components/pokemon/PokemonCard/InnerPokemonCard";
import { PokemonFilters } from "components/pokemon/PokemonFilters";
import { PokemonList } from "components/pokemon/PokemonList";
import { LoadingIndicator } from "components/shared/LoadingIndicator";
import { usePokemon } from "hooks/api/usePokemon";
import { Wrapper, Heading, Button } from "styles/shared";

import * as Styled from "./Pokemon.styled";
import { useUserStore } from "store/user";

export const Pokemon = () => {
  const navigate = useNavigate();
  const { fetchedPokemonRefs } = usePokemon();
  const chosenPokemonRef = useUserStore((state) => state.chosenPokemonRef);
  const setChosenPokemonRef = useUserStore(
    (state) => state.setChosenPokemonRef
  );

  const navigateToReview = useCallback(() => {
    navigate("/review");
  }, [navigate]);

  const handleClearingPokemon = useCallback(() => {
    setChosenPokemonRef({});
  }, [setChosenPokemonRef]);

  return (
    <Wrapper>
      <Heading>Choose your favourite Gen 1 Pokemon</Heading>
      {!fetchedPokemonRefs && (
        <Styled.LoadingWrapper>
          <LoadingIndicator />
        </Styled.LoadingWrapper>
      )}
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
