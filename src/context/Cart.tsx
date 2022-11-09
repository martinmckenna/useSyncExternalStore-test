import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
  useState,
  useEffect,
} from "react";

type State = {
  total: number;
  items: number;
};

const initialState = { total: 0, items: 0 };

export interface Context {
  get: () => State;
  set: (value: Partial<State>) => void;
  subscribe: (callback: () => void) => () => void;
}

export const CartContext = createContext<Context>({
  get: () => initialState,
  set: () => null,
  subscribe: (callback) => () => callback(),
});

/* React 18 makes you type children explicitly :( */
export const CartProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  const store = useRef(initialState);

  const get = useCallback(() => store.current, []);

  const subscribers = useRef(new Set<() => void>());

  const set = useCallback((value: Partial<State>) => {
    store.current = { ...store.current, ...value };
    subscribers.current.forEach((callback) => callback());
  }, []);

  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);

  return (
    <CartContext.Provider value={{ get, set, subscribe }}>
      {children}
    </CartContext.Provider>
  );
};

export function useCart<SelectorOutput>(
  selector: (state: State) => SelectorOutput
): [SelectorOutput, (value: Partial<State>) => void] {
  const store = useContext<Context>(CartContext);

  if (!store) {
    throw new Error("store not found!");
  }

  const [state, setState] = useState(selector(store.get()));

  useEffect(() => {
    /* being returned because the subscribe returns the unsub method */
    return store.subscribe(() => setState(selector(store.get())));
  }, []);

  return [state, store.set];
}
