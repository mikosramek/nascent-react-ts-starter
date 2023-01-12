import styled from "styled-components";
import { PokemonTypes } from "components/pokemon/PokemonTypes";

export const Wrapper = styled.div`
  background: var(--white);
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 5px;
  height: 150px;
  box-shadow: 0 2px 6px var(--shadow);
  cursor: pointer;
  position: relative;
`;

export const Image = styled.img`
  height: 96px;
  width: 96px;
  object-fit: contain;
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translate(-50%, 0);
`;

export const Name = styled.h3`
  position: relative;
  font-size: 16px;
  background: var(--text-backing);
  padding: 2px 6px 4px;
  color: var(--white);
  margin: 10px 0 0;
`;

export const Types = styled(PokemonTypes)`
  margin: 0 0 10px;
`;
