import { useState } from "react";
import { useInView } from "react-intersection-observer";
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
  const [imageLoaded, setLoaded] = useState(false);
  const { ref, inView } = useInView();
  return (
    <Styled.InnerWrapper ref={ref}>
      {!!name && (
        <>
          <Styled.Name>{name}</Styled.Name>
          <Styled.ImagePlaceholder loaded={imageLoaded} />
          {!!inView && (
            <Styled.Image
              src={sprite}
              alt={`${name}`}
              onLoad={() => setLoaded(true)}
            />
          )}
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
