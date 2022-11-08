import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type State = {
  total: number;
  items: number;
};

const initialState = { total: 0, items: 0 };

export interface Context {
  cartState: State;
  setCart: (slice: Partial<State>) => void;
}

export const CartContext = createContext<Context>({
  cartState: initialState,
  setCart: () => null,
});

export const CartProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [store, updateStore] = useState(initialState);

  const setCart = useCallback(
    (newState: Partial<State>) => {
      updateStore({
        ...store,
        ...newState,
      });
    },
    [store.items, store.total]
  );

  return (
    <CartContext.Provider value={{ cartState: store, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext<Context>(CartContext);
