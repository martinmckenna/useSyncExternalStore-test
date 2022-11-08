import React, { FC } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const StaticComponent: FC<TProps> = () => {
  const {
    cartTotal: { items },
  } = useCart();
  return <div>items: {items}</div>;
};

export default StaticComponent;
