import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import StaticComponent from "src/components/StaticComponent";

interface TProps {
  children?: ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 64px;
  background-color: yellow;
`;

export const SomeParentElement: FC<TProps> = ({ children }) => {
  return (
    <Wrapper>
      <h2>some parent element</h2>
      {children}
      <StaticComponent />
    </Wrapper>
  );
};

export default SomeParentElement;
