import { HTMLInputTypeAttribute } from "react";
import * as Styled from "./FormInput.styled";

type Props = {
  inputName: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  value: string;
  onChange: (name: any, input: string) => void;
  errorMessage?: string;
  placeholder?: string;
};

export const FormInput = ({
  inputName,
  label,
  type = "text",
  value,
  onChange,
  errorMessage,
  placeholder = "",
}: Props) => {
  return (
    <>
      <Styled.Label htmlFor={inputName}>{label}:</Styled.Label>
      {!!errorMessage && (
        <Styled.ErrorLabel htmlFor={inputName}>
          {errorMessage}
        </Styled.ErrorLabel>
      )}
      <Styled.InputBase
        type={type}
        id={inputName}
        name={inputName}
        value={value}
        onChange={(e) => onChange(inputName, e.target.value)}
        aria-invalid={!!errorMessage}
        placeholder={placeholder}
      />
    </>
  );
};
