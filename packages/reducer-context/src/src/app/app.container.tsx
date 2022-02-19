import { useReducer } from "react";
import { StateContext, State, initialState } from "../context/stateContext";
import { App } from "./app";

interface TripSelectedAction {
  type: "tripSelected";
  selectedTrip: Trip;
}
interface TripsFetchedAction {
  type: "tripsFetched";
  data: DataSet;
}
type Actions = TripSelectedAction | TripsFetchedAction;

const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case "tripSelected":
      return { ...state, selectedTrip: action.selectedTrip };
    case "tripsFetched":
      return { ...state, ...action.data };
  }
};

export const AppContainer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    selectTrip: (selectedTrip: Trip) => {
      dispatch({ type: "tripSelected", selectedTrip });
    },
    fetchTrips: (data: DataSet) => {
      dispatch({ type: "tripsFetched", data });
    },
  };

  return (
    <StateContext.Provider value={value}>
      <App />
    </StateContext.Provider>
  );
};
