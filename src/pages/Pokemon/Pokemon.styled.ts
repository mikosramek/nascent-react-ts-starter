import styled, { css } from "styled-components";
import { phone, tablet } from "styles/media";

export const LoadingWrapper = styled.div`
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChosenPokemonCard = styled.div`
  height: 150px;
  box-shadow: 0px 2px 8px var(--shadow);
  width: calc(100% / 4);
  border-radius: 5px;
  ${tablet(css`
    width: auto;
  `)}
  ${phone(css`
    margin-bottom: 15px;
  `)}
`;

export const ChosenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
  ${phone(css`
    flex-direction: column;
  `)}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & button {
    margin-bottom: 15px;
  }
`;
