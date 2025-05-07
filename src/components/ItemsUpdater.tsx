import { FC } from "react";
import { useCart, useNotifications } from "src/context/Cart";

interface TProps {}

export const StaticComponent: FC<TProps> = () => {
  const [items, updateCart] = useCart((state) => state.items);
  const [alerts, updateNotifications] = useNotifications(
    (state) => state.alerts
  );

  return (
    <div>
      <p>{items}</p>
      <button onClick={() => updateCart({ items: items + 1 })}>
        update cart total
      </button>
      <button
        onClick={() =>
          updateNotifications({
            alerts: [...alerts, { id: 234, message: "this is a new one" }],
          })
        }
      >
        add an alert
      </button>
      <div>{JSON.stringify(alerts)}</div>
    </div>
  );
};

export default StaticComponent;
