import { Metadata } from "next";
import { CartCounter } from "@/shopping-cart";

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Un simple contador de artículos",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter value={20} />
    </div>
  );
}

// flex items-center justify-center p2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2
