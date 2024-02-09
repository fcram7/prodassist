import { useState } from "react";

const useInput  = (initValue) => {
  const [value, setValue] = useState(initValue)

  const valueChangeHandler = (e) => setValue(e.target.value)

  return [value, valueChangeHandler]
}

export default useInput;