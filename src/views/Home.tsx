import { FC } from "react";

import UpdaterComponent from "src/components/UpdaterComponent";
import ReaderComponent from "src/components/ReaderComponent";
import SomeParentElement from "src/components/SomeParentElement";

import { CartProvider } from "src/context/Cart";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <CartProvider>
      <h1>Context Test App</h1>
      <SomeParentElement>
        <UpdaterComponent />
        <ReaderComponent />
      </SomeParentElement>
    </CartProvider>
  );
};

export default Home;
