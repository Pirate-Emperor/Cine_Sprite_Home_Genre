/*
Hooks: Debounce
To prevent server overload when fetching.
*/

import React, { useState, useEffect } from "react";

const useDebounce = (value, delay) => {
  const [data, setData] = useState(value);
  useEffect(() => {
    let timer = setTimeout(() => {
      setData(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return data;
};

export default useDebounce;
