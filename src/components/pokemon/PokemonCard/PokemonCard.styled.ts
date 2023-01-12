import styled from "styled-components";
import { PokemonTypes } from "components/pokemon/PokemonTypes";

export const Wrapper = styled.li`
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 2px 6px var(--shadow);
  margin: 5px;
  width: calc((100% - 40px) / 4);
  cursor: pointer;
  height: 150px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0;
  border: none;
  cursor: inherit;
  background: none;
  height: 100%;
`;

export const InnerWrapper = styled.div`
  position: relative;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
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
  text-transform: capitalize;
`;

export const Types = styled(PokemonTypes)`
  margin: 0 0 10px;
`;
