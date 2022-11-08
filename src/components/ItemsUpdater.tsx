import { FC } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const StaticComponent: FC<TProps> = () => {
  const {
    setCart,
    cartState: { items: cartItems },
  } = useCart();
  return (
    <div>
      <p>{cartItems}</p>
      <button onClick={() => setCart({ items: cartItems + 1 })}>
        update cart items
      </button>
    </div>
  );
};

export default StaticComponent;
