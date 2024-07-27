/* eslint-disable no-restricted-globals */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Button from './Button';

type CounterInputProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
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
    setCount((prevCount) => {
      const newCount = Math.min(prevCount + step, max);
      return Number(newCount.toFixed(digitsAfterDecimal));
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      const newCount = Math.max(prevCount - step, min);
      return Number(newCount.toFixed(digitsAfterDecimal));
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = e.target.value;
    setValue(eventValue);
  };

  const handleOnBlur = () => {
    if (!value) {
      setCount(min);
    } else if (isNaN(Number(value))) {
      setValue(count.toString());
    } else {
      const validVal = Math.max(
        min,
        Math.min(Number(parseFloat(value).toFixed(digitsAfterDecimal)), max),
      );
      setCount(validVal);
      setValue(validVal.toString());
    }
  };

  return (
    <div className="relative flex items-center gap-[1px]">
      <Button
        onClick={handleDecrement}
        variant="icon-square"
        className="text-xs p-1 m-0 w-auto h-auto rounded-r-none"
      >
        <FaMinus />
      </Button>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onBlur={handleOnBlur}
        className=" border-background-dark border bg-background-dark hover:ring-1 ring-text-main shadow-md text-sm font-normal max-w-[3rem] text-center outline-none text-primary"
      />
      <Button
        onClick={handleIncrement}
        variant="icon-square"
        className="text-xs p-1 m-0 w-auto h-auto rounded-l-none"
      >
        <FaPlus />
      </Button>
    </div>
  );
}
