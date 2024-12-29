import Button from "@/components/button/Button";
import React from "react";
const flexBetween = "flex justify-between";

const Summary = () => {
  return (
    <div className="flex-1 border-1 rounded-2xl p-5">
      <div className="py-2 border-b-2">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Subtotal</span>
        <span className="text-accent-500">$1300</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Estimated shipping</span>
        <span className="text-accent-500">$10.00</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Discounted shipping</span>
        <span className="text-accent-500">$10.00</span>
      </div>
      <div className={`${flexBetween} mt-5`}>
        <span className="font-bold">Total</span>
        <span className="text-accent-500">$1300</span>
      </div>
      <Button type="primary" size="big" width="full">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
