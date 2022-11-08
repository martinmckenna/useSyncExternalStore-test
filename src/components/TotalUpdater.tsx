import { FC } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const DynamicComponent: FC<TProps> = () => {
  const {
    setCart,
    cartState: { total: cartTotal },
  } = useCart();
  return (
    <div>
      <p>{cartTotal}</p>
      <button onClick={() => setCart({ total: cartTotal + 1 })}>
        update cart total
      </button>
    </div>
  );
};

export default DynamicComponent;
