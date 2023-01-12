import styled, { css } from "styled-components";
import { typeColorMap, ValidColorType } from "utils/general";

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
