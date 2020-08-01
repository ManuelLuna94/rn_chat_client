import { useState } from "react";

function useInput(defaultValue: string = "", max: number = 20) {
  const [value, setValue] = useState(defaultValue);

  const [charsLeft, setCharsLeft] = useState(max);

  const updateValue = (text: string) => {
    if (text.length > max) return;
    setCharsLeft(max - text.length);
    setValue(text);
  };

  return [value, updateValue, charsLeft];
}

export default useInput;
