import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import Button from "@mui/material/Button";

import { TripCardLayout } from "./trip-details";
import { selectedTripState } from "../../atoms";
import {
  isTripSelected,
  tripByIdState,
  locations as locationsState,
  operatorFromTripId,
} from "../../atoms/selectors";

interface Props {
  tripId: TripId;
}

export const Trip: React.FC<Props> = ({ tripId }) => {
  const selectTrip = useSetRecoilState(selectedTripState);
  const operator = useRecoilValue(operatorFromTripId(tripId));
  const locations = useRecoilValue(locationsState);
  const trip = useRecoilValue(tripByIdState(tripId));
  const isSelected = useRecoilValue(isTripSelected(tripId));

  return (
    <TripCardLayout
      isSelected={isSelected}
      trip={trip}
      operator={operator}
      locations={locations}
    >
      <Button variant="contained" onClick={() => selectTrip(tripId)}>
        Select
      </Button>
    </TripCardLayout>
  );
};
