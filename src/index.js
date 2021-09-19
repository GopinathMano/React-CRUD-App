import { StrictMode } from "react";
import ReactDOM from "react-dom";

import PostApp from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <PostApp />
  </StrictMode>,
  rootElement
);
