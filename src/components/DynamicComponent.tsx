import React, { FC, useState } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const DynamicComponent: FC<TProps> = () => {
  const { setCartTotal, cartTotal } = useCart();
  return (
    <div>
      <p>{cartTotal}</p>
      <button
        onClick={() =>
          setCartTotal({ type: "cart_update", data: cartTotal + 1 })
        }
      >
        update cart total
      </button>
    </div>
  );
};

export default DynamicComponent;
