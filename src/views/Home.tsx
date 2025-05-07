import { FC } from "react";

import TotalUpdater from "src/components/TotalUpdater";
import ItemsUpdater from "src/components/ItemsUpdater";
import SomeParentElement from "src/components/SomeParentElement";

import {
  CartProvider,
  NotificationProvider,
  UserProvider,
} from "src/context/Cart";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <CartProvider>
      <UserProvider>
        <NotificationProvider>
          <h1>Context Test App</h1>
          <SomeParentElement>
            <TotalUpdater />
            <ItemsUpdater />
          </SomeParentElement>
        </NotificationProvider>
      </UserProvider>
    </CartProvider>
  );
};

export default Home;
