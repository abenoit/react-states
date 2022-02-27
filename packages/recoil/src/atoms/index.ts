import { atom } from "recoil";

export const selectedTripState = atom({
  key: "selectedTripState",
  default: null as TripId | null,
});
