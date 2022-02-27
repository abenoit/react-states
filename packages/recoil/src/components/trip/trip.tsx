import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";

import Button from "@mui/material/Button";

import { TripCardLayout } from "./trip-details";
import { selectedTripState, operatorsState, locationsState } from "../../atoms";
import { isTripSelected, tripByIdState } from "../../atoms/selectors";

interface Props {
  tripId: TripId;
}

export const Trip: React.FC<Props> = ({ tripId }) => {
  const selectTrip = useSetRecoilState(selectedTripState);
  const operators = useRecoilValue(operatorsState);
  const locations = useRecoilValue(locationsState);
  const trip = useRecoilValue(tripByIdState(tripId));
  const isSelected = useRecoilValue(isTripSelected(tripId));

  return (
    <TripCardLayout
      isSelected={isSelected}
      trip={trip}
      operators={operators}
      locations={locations}
    >
      <Button variant="contained" onClick={() => selectTrip(tripId)}>
        Select
      </Button>
    </TripCardLayout>
  );
};
