import { PokemonType } from "store/pokemon";
import * as Styled from "./PokemonCard.styled";

type AllOrNone<T> = Required<T> | Partial<Record<keyof T, undefined>>;

export type baseProps = {
  name: string;
  sprite: string;
  types: PokemonType[];
};

export type InnerPokemonCardProps = AllOrNone<baseProps>;

export const InnerPokemonCard = ({
  name,
  sprite,
  types,
}: InnerPokemonCardProps) => {
  return (
    <Styled.InnerWrapper>
      {!!name && (
        <>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Image src={sprite} alt={`${name}`} />
          <Styled.Types types={types} />
        </>
      )}
      {!name && (
        <>
          <Styled.Name>Select a 'mon</Styled.Name>
          <p>?</p>
          <Styled.Types types={[{ type: { name: "unknown", url: "" } }]} />
        </>
      )}
    </Styled.InnerWrapper>
  );
};
