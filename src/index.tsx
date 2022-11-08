// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./styles/index.css";

import Home from "src/views/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
`;

const RouteWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

((): void => {
  // const root = createRoot(document.getElementById("root"));
  // return root.render(
  //   <BrowserRouter>
  //     <Wrapper>
  //       <RouteWrapper>
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //         </Routes>
  //       </RouteWrapper>
  //     </Wrapper>
  //   </BrowserRouter>
  // );

  ReactDOM.render(
    <BrowserRouter>
      <Wrapper>
        <RouteWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </RouteWrapper>
      </Wrapper>
    </BrowserRouter>,
    document.getElementById("root")
  );
})();
