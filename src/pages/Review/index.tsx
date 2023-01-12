import { InnerPokemonCard } from "components/pokemon/PokemonCard/InnerPokemonCard";
import { usePokemonStore } from "store/pokemon";
import { useUserStore } from "store/user";
import { Wrapper, Heading } from "styles/shared";
import { normalizeCamelCase } from "utils/general";

import * as Styled from "./Review.styled";

export const Review = () => {
  const chosenPokemon = usePokemonStore((state) => state.chosenPokemonRef);
  const user = useUserStore((state) => state.user);

  return (
    <Wrapper>
      <Heading>Is this info correct?</Heading>
      <Styled.InfoWrapper>
        <Styled.InfoList>
          {Object.entries(user).map(([field, value]) => {
            return (
              <li>
                {normalizeCamelCase(field)}: {value}
              </li>
            );
          })}
        </Styled.InfoList>
        <Styled.PokemonWrapper>
          <InnerPokemonCard {...chosenPokemon} />
        </Styled.PokemonWrapper>
      </Styled.InfoWrapper>

      <Styled.Button>Submit details</Styled.Button>
    </Wrapper>
  );
};
