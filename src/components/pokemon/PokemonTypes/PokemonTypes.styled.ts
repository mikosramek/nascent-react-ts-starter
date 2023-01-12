import styled, { css } from "styled-components";

export type ValidColorType = keyof typeof typeColorMap;

const typeColorMap = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
  unknown: "#68A090",
  shadow: "#735797",
};

export const TypeList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

export const TypeWrapper = styled.li<{ typeName: ValidColorType }>`
  margin-right: 5px;
  padding: 2px 8px 4px;
  border-radius: 15px;
  color: var(--white);
  ${({ typeName }) => {
    return css`
      background: ${typeColorMap[typeName]};
    `;
  }}
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Text = styled.p`
  margin: 0;
`;
