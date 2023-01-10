import { useState, useEffect } from "react";

export default function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);
  return {
    count,
    increment,
  };
}
