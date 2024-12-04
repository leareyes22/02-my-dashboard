"use client";

import { IoCartOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${count}`}
        label={"Contador"}
        subTitle={"Productos en el carrito de compras"}
        icon={<IoCartOutline size={70} className="text-blue-600" />}
        href={"/dashboard/counter"}
      />
    </div>
  );
};
