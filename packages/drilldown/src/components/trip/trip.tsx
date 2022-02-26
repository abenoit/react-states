import React from "react";
import Button from "@mui/material/Button";

import { TripCardLayout } from "./trip-details";

interface Props {
  trip: Trip;
  locations: Locations;
  operators: Operators;
  onSelect: (trip: Trip) => void;
}

export const Trip: React.FC<Props> = ({
  trip,
  operators,
  locations,
  onSelect,
}) => {
  return (
    <TripCardLayout trip={trip} operators={operators} locations={locations}>
      <Button variant="contained" onClick={() => onSelect(trip)}>
        Select
      </Button>
    </TripCardLayout>
  );
};
