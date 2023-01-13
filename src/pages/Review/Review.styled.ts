import styled, { css } from "styled-components";
import { phone } from "styles/media";
import { Button as ButtonBase } from "styles/shared";

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  ${phone(css`
    flex-direction: column;
  `)}
`;

export const InfoList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-position: inside;
  ${phone(css`
    margin-bottom: 15px;
  `)}
`;

export const PokemonWrapper = styled.div`
  margin-bottom: 10px;
  width: 150px;
  & div {
    height: 150px;
    box-shadow: 0px 2px 8px var(--shadow);
    border-radius: 5px;
  }
`;

export const Button = styled(ButtonBase)`
  display: block;
  margin: 15px auto 0;
`;

export const ResponseCopy = styled.span`
  text-transform: capitalize;
  display: block;
  text-align: center;
  margin: 10px 0 0;
`;
