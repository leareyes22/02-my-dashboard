"use client";

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrementCounter = () => {
    if (counter === 0) return;

    setCounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          onClick={decrementCounter}
          className="flex items-center justify-center p2 rounded-xl bg-red-900 text-white hover:bg-red-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={incrementCounter}
          className="flex items-center justify-center p2 rounded-xl bg-teal-900 text-white hover:bg-teal-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
};
