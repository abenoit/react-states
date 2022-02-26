import { createMachine } from "xstate";

export const tripsMachine = createMachine({
  id: "trips",
  initial: "loading",
  states: {
    loading: {
      on: { LOADED: "displayTrips" },
    },
    displayTrips: {},
  },
});
