import { contextFactory } from "./ContextFactory";

export const { Provider: CartProvider, useContextState: useCart } =
  contextFactory({
    total: 0,
    items: 0,
  });

export const { Provider: UserProvider, useContextState: useUser } =
  contextFactory({
    user: {
      id: 123,
      username: "joeschmo",
    },
  });

export const {
  Provider: NotificationProvider,
  useContextState: useNotifications,
} = contextFactory({
  alerts: [
    { id: 123, message: "hello world" },
    { id: 234, message: "hello world again" },
  ],
  messages: [{ id: 234, message: "you have a message" }],
});
