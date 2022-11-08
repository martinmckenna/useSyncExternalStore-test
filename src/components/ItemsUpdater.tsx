import { FC } from "react";
import { useCart } from "src/context/Cart";

interface TProps {}

export const StaticComponent: FC<TProps> = () => {
  const [items, updateCart] = useCart((state) => state.items);
  return (
    <div>
      <p>{items}</p>
      <button onClick={() => updateCart({ items: items + 1 })}>
        update cart total
      </button>
    </div>
  );
};

export default StaticComponent;
