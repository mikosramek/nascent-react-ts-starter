import cloneDeep from "lodash.clonedeep";

type Inputs = Record<
  string,
  {
    val: string;
    validate: (val: string) => boolean;
    errorLabelCopy: string;
    error?: string;
  }
>;
export const validateInput = (inputsBase: Inputs) => {
  const inputs = cloneDeep(inputsBase);
  let isFormValid = true;
  for (const input of Object.values(inputs)) {
    const isInputValid = input.validate(input.val);
    input.error = !isInputValid ? input.errorLabelCopy : undefined;
    if (!isInputValid) {
      isFormValid = false;
    }
  }
  return { isFormValid, updatedInputs: inputs };
};
