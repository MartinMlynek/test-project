import { FC, useCallback, useState, memo } from "react";

interface Props {
  label: string;
}

const CounterBase: FC<Props> = ({ label }) => {
  const [clicks, setClicks] = useState(0);
  const handleClick = useCallback(() => {
    setClicks((prevValue) => prevValue + 1);
  }, []);

  return (
    <div className="counter">
      <label>{`${label} count: ${clicks}`}</label>
      <button onClick={handleClick}>{label}</button>
    </div>
  );
};

export const Counter = memo(CounterBase);
