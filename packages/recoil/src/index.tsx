import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./app";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
