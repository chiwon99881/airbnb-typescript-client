import { useState } from "react";

const useInput = (defaultValue: string) => {
  const [valueState, setValueState] = useState(defaultValue);

  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValueState(value);
  };
  return { valueState, onChange };
};

export default useInput;