import { createContext } from "react";

export interface State {
  selectedTrip?: Trip;
  trips?: Trips;
  operators?: Operators;
  locations?: Locations;
}

type Context = {
  state: State;
  selectTrip: (selectedTrip: Trip) => void;
  fetchTrips: (trips: Trips) => void;
};

export const initialState = {
  selectedTrip: undefined,
  trips: undefined,
  operators: undefined,
  locations: undefined,
};

export const StateContext = createContext<Context>({
  state: initialState,
  selectTrip: () => {},
  fetchTrips: () => {},
});
