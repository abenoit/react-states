import { combineReducers, createStore } from "redux";
import trips from "./trips";
import selectedTrip from "./selectedTrip";
import operators from "./operators";
import locations from "./locations";

const rootReducer = combineReducers({
  trips,
  locations,
  operators,
  selectedTrip,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
