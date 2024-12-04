"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import axios from "axios";

export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await axios.get("/api/counter");

  return response.data as CounterResponse;
};

export const CartCounter = () => {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p2 rounded-xl bg-red-900 text-white hover:bg-red-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p2 rounded-xl bg-teal-900 text-white hover:bg-teal-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </div>
  );
};
