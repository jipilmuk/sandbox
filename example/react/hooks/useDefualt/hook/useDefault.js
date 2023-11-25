import { useState } from "react";

const useDefault = (defaultState, initialState) => {
  const [value, setValue] = useState(initialState);
  const isValueEmpty = value === undefined || value === null;
  return [isValueEmpty ? defaultState : value, setValue];
};

export default useDefault;
