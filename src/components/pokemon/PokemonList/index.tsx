import { usePokemonStore } from "store/pokemon";
import { PokemonCard } from "components/pokemon/PokemonCard";
import * as Styled from "./PokemonList.styled";

export const PokemonList = () => {
  const pokemonRefs = usePokemonStore((store) => store.pokemonRefs);
  return (
    <Styled.List>
      {Object.entries(pokemonRefs).map(([name, { url }], index) => {
        return (
          <Styled.ListItem key={`pokemon-${index}`}>
            <PokemonCard name={name} url={url} />
          </Styled.ListItem>
        );
      })}
    </Styled.List>
  );
};
