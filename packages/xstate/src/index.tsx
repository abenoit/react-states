import { createContext } from "react";
import ReactDOM from "react-dom";
import { useInterpret } from "@xstate/react";
import "./index.css";
import { App } from "./app";

import { tripsMachine } from "./state";

export const GlobalStateContext = createContext({});

const GlobalStateProvider: React.FC = ({ children }) => {
  const tripsService = useInterpret(tripsMachine);

  return (
    <GlobalStateContext.Provider value={{ tripsService }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById("root")
);
