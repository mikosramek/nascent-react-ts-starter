import { PokemonType } from "store/pokemon";
import * as Styled from "./PokemonTypes.styled";

type Props = {
  types: PokemonType[];
  className?: string;
};

export const PokemonTypes = ({ types, className }: Props) => {
  return (
    <Styled.TypeList className={className}>
      {types.map(({ type }) => {
        return (
          <Styled.TypeWrapper typeName={type.name as Styled.ValidColorType}>
            <Styled.Text>{type.name}</Styled.Text>
          </Styled.TypeWrapper>
        );
      })}
    </Styled.TypeList>
  );
};
