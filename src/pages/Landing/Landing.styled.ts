import styled from "styled-components";
import { Button as ButtonBase } from "styles/shared";

export const Form = styled.form``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(ButtonBase)`
  cursor: pointer;
  margin-right: 5px;
  font-size: 18px;
  flex-grow: 1;
`;
