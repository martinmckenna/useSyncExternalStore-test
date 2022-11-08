import { FC } from "react";

import TotalUpdater from "src/components/TotalUpdater";
import ItemsUpdater from "src/components/ItemsUpdater";
import SomeParentElement from "src/components/SomeParentElement";

import { CartProvider } from "src/context/Cart";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <CartProvider>
      <h1>Context Test App</h1>
      <SomeParentElement>
        <TotalUpdater />
        <ItemsUpdater />
      </SomeParentElement>
    </CartProvider>
  );
};

export default Home;
