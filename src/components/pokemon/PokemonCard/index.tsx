import { useCallback, useEffect } from "react";
import { usePokemon } from "hooks/api/usePokemon";
import { usePokemonStore } from "store/pokemon";
import { LoadingIndicator } from "components/shared/LoadingIndicator";

import * as Styled from "./PokemonCard.styled";
import { InnerPokemonCard } from "./InnerPokemonCard";
import { STORED_POKEMON_KEY } from "utils/general";

type Props = {
  name: string;
  url: string;
};

export const PokemonCard = ({ name, url }: Props) => {
  const { fetchPokemon } = usePokemon();
  const pokemon = usePokemonStore((state) => state.getPokemon(name));
  const setChosenPokemonRef = usePokemonStore(
    (state) => state.setChosenPokemonRef
  );
  const isPokemonFetched = usePokemonStore((state) =>
    state.getIsPokemonFetched(name)
  );

  const fetchPokemonData = useCallback(() => {
    if (!isPokemonFetched) {
      fetchPokemon({ url });
    }
  }, [fetchPokemon, isPokemonFetched, url]);

  useEffect(() => {
    fetchPokemonData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectPokemon = useCallback(() => {
    if (!pokemon) return;
    const ref = {
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      types: pokemon.types,
    };
    setChosenPokemonRef(ref);
    localStorage.setItem(STORED_POKEMON_KEY, JSON.stringify(ref));
  }, [pokemon, setChosenPokemonRef]);

  return (
    <>
      {!isPokemonFetched && <LoadingIndicator />}
      {!!isPokemonFetched && (
        <>
          {!!pokemon && (
            <Styled.Wrapper>
              <Styled.Button onClick={selectPokemon}>
                <InnerPokemonCard
                  name={pokemon.name}
                  sprite={pokemon.sprites.front_default}
                  types={pokemon.types}
                />
              </Styled.Button>
            </Styled.Wrapper>
          )}
        </>
      )}
    </>
  );
};
