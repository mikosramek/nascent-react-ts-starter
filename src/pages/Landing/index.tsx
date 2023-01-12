import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "components/shared/FormInput";
import { useInput, BaseInputs } from "hooks/form/useInput";
import { validatePhoneNumber } from "utils/general";
import { Wrapper, Heading } from "styles/shared";
import * as Styled from "./Landing.styled";

const baseInputs = {
  firstName: {
    val: "",
    label: "First name",
    errorLabelCopy: "First name cannot be blank",
    validate: (val) => !!val,
  },
  lastName: {
    val: "",
    label: "Last name",
    errorLabelCopy: "Last name cannot be blank",
    validate: (val) => !!val,
  },
  phoneNumber: {
    val: "",
    label: "Phone number",
    errorLabelCopy: "Phone number must be 10 numbers",
    validate: validatePhoneNumber,
  },
  address: {
    val: "",
    label: "Address",
    errorLabelCopy: "Address cannot be blank",
    validate: (val) => !!val,
  },
} satisfies BaseInputs;

export const Landing = () => {
  const navigate = useNavigate();
  const { inputs, handleInputChange, validateInputs, clearInputs } = useInput({
    baseInputs,
    useSessionStorage: true,
  });

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const isFormValid = validateInputs();
      if (!isFormValid) return;
      // const form = inputs as typeof baseInputs;
      navigate("/pokemon");
    },
    [validateInputs, navigate]
  );

  return (
    <Wrapper>
      <Heading>Let's get to know you</Heading>
      <Styled.Form onSubmit={handleSubmit}>
        {Object.entries(inputs).map(
          ([name, { val, label, error = "", specialType }], index) => {
            return (
              <FormInput
                key={`${name}-${index}`}
                inputName={name}
                label={label}
                value={val}
                onChange={handleInputChange}
                errorMessage={error}
                type={specialType}
              />
            );
          }
        )}
        <Styled.ButtonWrapper>
          <Styled.Button type="submit">Next</Styled.Button>
          <Styled.Button type="reset" onClick={clearInputs}>
            Clear form
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Wrapper>
  );
};
