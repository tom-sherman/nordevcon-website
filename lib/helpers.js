import { compareAsc, format } from "date-fns";
import { useEffect, useState } from "react";

// Good ol' bit of copy/pasta because my brain began to hurt
// Stores state & retrieves it from localStorage
export function useStickyState(defaultValue, key) {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const stickyValue = window.localStorage.getItem(key);

    if (stickyValue !== null) {
      setValue(JSON.parse(stickyValue));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
