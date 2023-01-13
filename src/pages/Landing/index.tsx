import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormInput } from "components/shared/FormInput";
import { validatePhoneNumber } from "utils/general";
import { Wrapper, Heading } from "styles/shared";

import * as Styled from "./Landing.styled";
import { useUserStore } from "store/user";
import { validateInput } from "utils/form";
import cloneDeep from "lodash.clonedeep";

type Inputs = Record<
  string,
  {
    val: string;
    label: string;
    validate: (val: string) => boolean;
    errorLabelCopy: string;
    error?: string;
    type?: string;
  }
>;

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
} as Inputs;

export const Landing = () => {
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const updateUser = useUserStore((state) => state.updateUser);
  const clearUser = useUserStore((state) => state.clearUser);

  const [inputs, setInputs] = useState(cloneDeep(baseInputs));

  useEffect(() => {
    const inputCopy = cloneDeep(inputs);
    for (const [key, val] of Object.entries(user)) {
      inputCopy[key as keyof typeof inputCopy].val = val;
    }
    setInputs(inputCopy);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { isFormValid, updatedInputs } = validateInput(inputs);
      setInputs(updatedInputs as Inputs);
      if (!isFormValid) return;
      navigate("/pokemon");
    },
    [navigate, inputs]
  );

  return (
    <Wrapper>
      <Heading>Let's get to know you</Heading>
      <Styled.Form onSubmit={handleSubmit}>
        {Object.entries(inputs).map(
          ([name, { val, label, error = "", type = "text" }], index) => {
            return (
              <FormInput
                key={`${name}-${index}`}
                inputName={name}
                label={label}
                value={val}
                onChange={updateUser}
                errorMessage={error}
                type={type}
              />
            );
          }
        )}
        <Styled.ButtonWrapper>
          <Styled.Button type="submit">Next</Styled.Button>
          <Styled.Button type="reset" onClick={clearUser}>
            Clear form
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Wrapper>
  );
};
