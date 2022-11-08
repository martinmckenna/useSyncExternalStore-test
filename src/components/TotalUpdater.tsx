import { FC } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const DynamicComponent: FC<TProps> = () => {
  const [cartTotal, setCart] = useCart((state) => state.total);
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
