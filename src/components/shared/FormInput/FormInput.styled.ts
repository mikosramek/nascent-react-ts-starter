import styled, { css } from "styled-components";
import { phone } from "styles/media";

export const Label = styled.label`
  display: block;
  font-size: 18px;
  font-weight: bold;
  ${phone(css`
    font-size: 12px;
  `)}
`;

export const ErrorLabel = styled.label`
  display: block;
  color: var(--impact);
  font-size: 18px;
  ${phone(css`
    font-size: 12px;
  `)}
`;

export const InputBase = styled.input`
  margin-bottom: 10px;
  width: 100%;
  &:last-of-type {
    margin-bottom: 15px;
  }
`;
