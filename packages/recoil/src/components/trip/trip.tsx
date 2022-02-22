import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOn from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { formatTime, findLocationById, findOperatorById } from "../utils";
import { Operator } from "../operator";
import { useStyles } from "./trip.styles";

import { selectedTripState, operatorsState, locationsState } from "../../atoms";
import { tripByIdState } from "../../atoms/selectors";

interface Props {
  tripId: TripId;
}

interface TripProp {
  trip: Trip;
  locations: Locations;
  operators: Operators;
}

interface TripSummaryProps {
  trip: Trip;
  locations: Locations;
}

const TripSummary: React.FC<TripSummaryProps> = ({ trip, locations }) => {
  const classes = useStyles();
  const origin = findLocationById(trip.origin_location_id, locations);
  const destination = findLocationById(trip.destination_location_id, locations);

  return (
    <Stack direction="column">
      <Stack direction="row" alignItems="center">
        <LocationOn color="primary" />
        <Typography
          variant="body2"
          color="text.secondary"
          fontWeight="bold"
          pl={2}
        >
          {formatTime(trip.departure_time)}
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          noWrap
          className={classes.origin}
        >
          {origin?.name}
        </Typography>
      </Stack>
      <div className={classes.line} />
      <Stack direction="row" alignItems="center">
        <LocationOn color="primary" />
        <Typography
          variant="body2"
          color="text.primary"
          fontWeight="bold"
          pl={2}
        >
          {formatTime(trip.arrival_time)}
        </Typography>
        <Typography variant="body1" color="text.primary" pl={2}>
          {destination?.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

const TripCardLayout: React.FC<TripProp> = ({
  trip,
  operators,
  locations,
  children,
}) => {
  const operator = findOperatorById(trip.operator_id, operators);

  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardContent>
        <Stack direction="column" spacing={2}>
          {operator && <Operator operator={operator} />}

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <TripSummary trip={trip} locations={locations} />
            {children}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export const Trip: React.FC<Props> = ({ tripId }) => {
  const selectTrip = useSetRecoilState(selectedTripState);
  const operators = useRecoilValue(operatorsState);
  const locations = useRecoilValue(locationsState);
  const trip = useRecoilValue(tripByIdState(tripId));

  return (
    <TripCardLayout trip={trip} operators={operators} locations={locations}>
      <Button variant="contained" onClick={() => selectTrip(tripId)}>
        Select
      </Button>
    </TripCardLayout>
  );
};
