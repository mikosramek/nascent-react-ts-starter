import { LoadingIndicator } from "components/shared/LoadingIndicator";
import { usePokemon } from "hooks/api/usePokemon";
import { useEffect } from "react";
import { usePokemonStore } from "store/pokemon";

type Props = {
  name: string;
  url: string;
};

export const PokemonCard = ({ name, url }: Props) => {
  const { fetchPokemon } = usePokemon();
  const pokemon = usePokemonStore((state) => state.getPokemon(name));
  useEffect(() => {
    // TODO: intersection observer to load this
    if (name === "bulbasaur" && !pokemon) {
      fetchPokemon({ url });
    }
  }, [fetchPokemon, name, url, pokemon]);
  return (
    <>
      {!pokemon && <LoadingIndicator />}
      {!!pokemon && (
        <>
          <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
        </>
      )}
    </>
  );
};
