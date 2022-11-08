import { FC } from "react";

import DynamicComponent from "src/components/DynamicComponent";
import StaticComponent from "src/components/StaticComponent";
import SomeParentElement from "src/components/SomeParentElement";

import { CartProvider } from "src/context/Cart";

interface Props {}

export const Home: FC<Props> = () => {
  return (
    <CartProvider>
      <h1>Context Test App</h1>
      <SomeParentElement>
        <DynamicComponent />
        <StaticComponent />
      </SomeParentElement>
    </CartProvider>
  );
};

export default Home;
