import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <React.Suspense fallback={<div>Loading...</div>}>
      <App />
    </React.Suspense>
  </RecoilRoot>,
  document.getElementById("root")
);
