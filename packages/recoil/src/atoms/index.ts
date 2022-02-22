import { atom } from "recoil";

export const tripsState = atom({
  key: "tripsState", // unique ID (with respect to other atoms/selectors)
  default: {} as Trips, // valeur par défaut (alias valeur initials)
});

export const operatorsState = atom({
  key: "operatorsState",
  default: [] as Operators,
});

export const locationsState = atom({
  key: "locationsState",
  default: [] as Locations,
});

export const selectedTripState = atom({
  key: "selectedTripState",
  default: null as TripId | null,
});
