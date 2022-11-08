import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  Reducer,
  useContext,
  useReducer,
} from "react";

type State = {
  total: number;
  items: number;
};

type Action = "cart_update";

type ActionWrapper = { type: Action; data: Partial<State> };

const initialState = { total: 0, items: 0 };

export const reducer: Reducer<State, ActionWrapper> = (state, action) => {
  switch (action.type) {
    case "cart_update":
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
};

export interface Context {
  cartTotal: State;
  setCartTotal: Dispatch<ActionWrapper>;
}

export const CartContext = createContext<Context>({
  cartTotal: initialState,
  setCartTotal: () => null,
});

export const CartProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const [cartTotal, setCartTotal] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ cartTotal, setCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext<Context>(CartContext);
