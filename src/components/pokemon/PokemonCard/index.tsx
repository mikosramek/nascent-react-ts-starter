import { useCallback, useEffect } from "react";
import { usePokemon } from "hooks/api/usePokemon";
import { usePokemonStore } from "store/pokemon";
import { LoadingIndicator } from "components/shared/LoadingIndicator";

import * as Styled from "./PokemonCard.styled";

type Props = {
  name: string;
  url: string;
};

export const PokemonCard = ({ name, url }: Props) => {
  const { fetchPokemon } = usePokemon();
  const pokemon = usePokemonStore((state) => state.getPokemon(name));

  const fetchPokemonData = useCallback(() => {
    if (!pokemon) {
      fetchPokemon({ url });
    }
  }, [fetchPokemon, pokemon, url]);

  useEffect(() => {
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Styled.Wrapper>
      {!pokemon && <LoadingIndicator />}
      {!!pokemon && (
        <>
          <Styled.Name>{pokemon.name}</Styled.Name>
          <Styled.Image
            src={pokemon.sprites.front_default}
            alt={`${pokemon.name}`}
          />
          <Styled.Types types={pokemon.types} />
        </>
      )}
    </Styled.Wrapper>
  );
};
