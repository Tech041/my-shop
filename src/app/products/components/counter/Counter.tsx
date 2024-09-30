import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { IoIosRemove } from "react-icons/io";

interface CounterProps {
  itemQuantity: number;
  setItemQuantity: (value: number) => void;
}
const Counter = ({ itemQuantity, setItemQuantity }: CounterProps) => {
  const decreseQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };
  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  return (
    <div className="w-40 px-5 mt-10 py-2 flex items-center justify-between rounded-full bg-white shadow">
      <button onClick={decreseQuantity} className="cursor-pointer">
        <IoIosRemove />
      </button>
      <span className="">{itemQuantity}</span>
      <button onClick={increaseQuantity} className="cursor-pointer">
        <GrFormAdd />
      </button>
    </div>
  );
};

export default Counter;
