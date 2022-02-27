import React from "react";
import { useDispatch, useSelector } from "../../store/hooks";
import Button from "@mui/material/Button";
import { selectTrip } from "../../store/actions";

import { TripCardLayout } from "./trip-details";

interface Props {
  tripId: TripId;
}

export const Trip: React.FC<Props> = ({ tripId }) => {
  const dispatch = useDispatch();
  //@ts-ignore
  const trip = useSelector((state) => state.trips.trips[tripId]);
  const operators = useSelector((state) => state.operators);
  const locations = useSelector((state) => state.locations);
  const isSelected = useSelector((state) => state.selectedTrip?.id === tripId);

  return (
    <TripCardLayout
      isSelected={isSelected}
      trip={trip}
      operators={operators}
      locations={locations}
    >
      <Button variant="contained" onClick={() => dispatch(selectTrip(trip))}>
        Select
      </Button>
    </TripCardLayout>
  );
};
