interface validateInputValueProps {
  input?: string;
  schema: any;
  setError: (error: string) => void;
}

export const validateInputValue = ({
  input,
  schema,
  setError,
}: validateInputValueProps): boolean => {
  const inputResult = schema.safeParse(input);

  const inputMessage = inputResult.success
    ? ""
    : inputResult.error.errors[0]?.message;

  setError(inputMessage);

  return inputResult.success;
};

interface validateInputChangeProps extends validateInputValueProps {
  setInput: (value: string) => void;
}

export const validateInputChange = ({
  schema,
  setInput,
  setError,
}: validateInputChangeProps) => {
  return (value: string) => {
    setInput(value);

    validateInputValue({
      input: value,
      schema: schema,
      setError: setError,
    });
  };
};
