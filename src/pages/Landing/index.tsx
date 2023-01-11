import { FormInput } from "components/shared/FormInput";
import { useInput, BaseInputs } from "hooks/form/useInput";
import * as Styled from "./Landing.styled";

const baseInputs = {
  firstName: {
    val: "",
    label: "First name",
    errorString: "First name cannot be blank",
    validate: (val) => !!val,
  },
  lastName: {
    val: "",
    label: "Last name",
    errorString: "Last name cannot be blank",
    validate: (val) => !!val,
  },
  phoneNumber: {
    val: "",
    label: "Phone number",
    errorString: "Phone number must be 10 numbers",
    validate: (val) => val.length === 10,
  },
  address: {
    val: "",
    label: "Address",
    errorString: "Address cannot be blank",
    validate: (val) => !!val,
  },
} as BaseInputs;

export const Landing = () => {
  const { inputs, handleInputChange, validateInputs } = useInput({
    baseInputs,
  });

  return (
    <Styled.Wrapper>
      <Styled.Heading>Let's get to know you</Styled.Heading>
      <Styled.Form>
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
      </Styled.Form>
    </Styled.Wrapper>
  );
};
