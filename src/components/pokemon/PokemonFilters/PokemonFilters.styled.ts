import styled from "styled-components";

export const Form = styled.form`
  margin-bottom: 10px;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
`;

export const Legend = styled.legend`
  display: block;
  font-size: 18px;
  font-weight: bold;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  margin-left: 10px;
  padding: 4px 8px 4px;
  border: 1px solid var(--border);
  border-radius: 15px;
  transition: all 0.3s ease-out;
`;

export const RadioButton = styled.input`
  &:focus {
    + ${RadioLabel} {
      outline: 3px solid var(--outline);
    }
  }
  &:checked {
    + ${RadioLabel} {
      background: var(--unknown);
      color: var(--white);
      transition: all 0.1s ease-in;
    }
  }
`;
