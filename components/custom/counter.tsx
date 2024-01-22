import { useState } from "react";
import { useInterval } from "react-use";

export const Counter = ({
  valueFrom = 0,
  valueTo = 100,
  totalDuration = 3,
}) => {
  const [count, setCount] = useState(valueFrom);

  useInterval(
    () => {
      if (count < valueTo) {
        setCount(count + 1);
      }
    },
    (totalDuration / valueTo) * 1000,
  );

  return count;
};
