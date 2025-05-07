import {
  createContext as _createContext,
  FC,
  ReactNode,
  useCallback,
  useContext,
  useRef,
  useSyncExternalStore,
} from "react";

export interface Context<State extends any> {
  get: () => State;
  set: (value: Partial<State>) => void;
  subscribe: (callback: () => void) => () => void;
}

export const createContext = <State extends any>(initialState: State) =>
  _createContext<Context<State>>(null as any);

/* React 18 makes you type children explicitly :( */
export const contextFactory = <State extends Record<any, any>>(
  initialState: State
) => {
  const CreatedContext = createContext(initialState);

  const Provider: FC<{ children?: ReactNode }> = ({ children }) => {
    const store = useRef(initialState);

    const get = useCallback(() => store.current, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<typeof initialState>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => callback());
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => subscribers.current.delete(callback);
    }, []);

    return (
      <CreatedContext.Provider value={{ get, set, subscribe }}>
        {children}
      </CreatedContext.Provider>
    );
  };

  const useContextState = <SelectorOutput extends any>(
    selector: (state: typeof initialState) => SelectorOutput
  ): [SelectorOutput, (value: Partial<typeof initialState>) => void] => {
    const store = useContext<Context<typeof initialState>>(CreatedContext);

    if (!store) {
      throw new Error("store not found!");
    }

    const slice = useSyncExternalStore(store.subscribe, () =>
      selector(store.get())
    );

    return [slice, store.set];
  };

  Provider.displayName = "Provider";

  return { Provider, useContextState };
};
