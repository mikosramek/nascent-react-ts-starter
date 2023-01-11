import { useCallback, useEffect, useState } from "react";
import cloneDeep from "lodash.clonedeep";

export type BaseInputs = Record<
  string,
  {
    val: string;
    label: string;
    validate: (val: string) => boolean;
    errorLabelCopy: string;
    error?: string;
    specialType?: "textarea";
  }
>;

type Props = {
  baseInputs: BaseInputs;
  useSessionStorage?: boolean;
};

export const useInput = ({ baseInputs, useSessionStorage = false }: Props) => {
  const [inputs, setInputs] = useState(cloneDeep(baseInputs));

  // run-once
  useEffect(() => {
    if (useSessionStorage) {
      const inputCopy = cloneDeep(inputs);
      for (const [key, inputObject] of Object.entries(inputCopy)) {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
          inputObject.val = storedValue;
        }
      }
      setInputs(inputCopy);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearInputs = useCallback(() => {
    setInputs(cloneDeep(baseInputs));
    Object.keys(baseInputs).forEach((key) => {
      localStorage.removeItem(key);
    });
  }, [baseInputs]);

  const handleInputChange = (
    inputName: keyof typeof baseInputs,
    value: string
  ) => {
    if (useSessionStorage) {
      localStorage.setItem(inputName, value);
    }
    setInputs({
      ...inputs,
      [inputName]: {
        ...inputs[inputName],
        val: value,
      },
    });
  };

  const validateInputs = () => {
    const inputCopy = cloneDeep(inputs);
    let isFormValid = true;
    for (const inputObject of Object.values(inputCopy)) {
      const isInputValid = inputObject.validate(inputObject.val);
      inputObject.error = !isInputValid
        ? inputObject.errorLabelCopy
        : undefined;
      if (!isInputValid) {
        isFormValid = false;
      }
    }
    setInputs(inputCopy);
    return isFormValid;
  };

  return { inputs, handleInputChange, validateInputs, clearInputs };
};
