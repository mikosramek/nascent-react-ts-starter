import { PokemonType } from "store/pokemon";
import { ValidColorType } from "utils/general";
import * as Styled from "./PokemonTypes.styled";

type Props = {
  types: PokemonType[];
  className?: string;
};

export const PokemonTypes = ({ types, className }: Props) => {
  return (
    <Styled.TypeList className={className}>
      {types.map(({ type }, index) => {
        return (
          <Styled.TypeWrapper
            typeName={type.name as ValidColorType}
            key={`${index}-${type.name}`}
          >
            <Styled.Text>{type.name}</Styled.Text>
          </Styled.TypeWrapper>
        );
      })}
    </Styled.TypeList>
  );
};
