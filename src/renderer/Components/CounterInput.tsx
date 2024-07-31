/* eslint-disable no-restricted-globals */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import setValueIfNumber from '@Utils/setValueIfNumber';
import Button from './Button';

type CounterInputProps = {
  count: number;
  setCount: (newValue: number) => void;
  min?: number;
  max?: number;
  digitsAfterDecimal?: number;
  step?: number;
};

export default function CounterInput({
  count,
  setCount,
  min = 0,
  max = 99999,
  digitsAfterDecimal = 1,
  step = 1,
}: CounterInputProps) {
  const [value, setValue] = useState(count.toString());

  useEffect(() => {
    setValue(count.toString());
  }, [count]);
  const handleIncrement = () => {
    setCount(Number(Math.min(count + step, max).toFixed(digitsAfterDecimal)));
  };

  const handleDecrement = () => {
    setCount(Number(Math.min(count - step, max).toFixed(digitsAfterDecimal)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    setValue(eventValue);
  };

  return (
    <div className="relative flex items-center gap-[1px]">
      <Button
        onClick={handleDecrement}
        variant="icon-square"
        className="text-xs p-1 m-0 w-auto h-auto bg-background-main rounded-r-none"
      >
        <FaMinus />
      </Button>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={() =>
          setValueIfNumber({
            newValue: value,
            setInput: setValue,
            validValue: count.toString(),
            setValidValue: (newValidValue) => setCount(Number(newValidValue)),
            min,
            max,
            digitsAfterDecimal,
          })
        }
        className=" border-background-dark border bg-background-main hover:ring-1 ring-text-main shadow-md text-sm font-normal max-w-[3rem] text-center outline-none text-primary"
      />
      <Button
        onClick={handleIncrement}
        variant="icon-square"
        className="text-xs p-1 m-0 w-auto h-auto rounded-l-none bg-background-main"
      >
        <FaPlus />
      </Button>
    </div>
  );
}
