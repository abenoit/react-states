import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOn from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { formatTime } from "../utils";
import { Operator } from "../operator";
import { useStyles } from "./trip.styles";
import { useDispatch, useSelector } from "../../store/hooks";
import { selectTrip } from "../../store/selectedTrip";

import {
  getTripById,
  getLocationByTripId,
  getOperatorByTripId,
} from "../../store/selectors";

export interface Props {
  tripId: TripId;
}

interface TripProp {
  trip: Trip;
  departure_location: Location;
  arrival_location: Location;
  operator: Operator;
}

interface TripSummaryProps {
  trip: Trip;
  departure_location: Location;
  arrival_location: Location;
}

const TripSummary: React.FC<TripSummaryProps> = ({
  trip,
  departure_location,
  arrival_location,
}) => {
  const classes = useStyles();

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
          {departure_location?.name}
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
          {arrival_location?.name}
        </Typography>
      </Stack>
    </Stack>
  );
};

const TripCardLayout: React.FC<TripProp> = ({
  trip,
  operator,
  departure_location,
  arrival_location,
  children,
}) => {
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
            <TripSummary
              trip={trip}
              arrival_location={arrival_location}
              departure_location={departure_location}
            />
            {children}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export const Trip: React.FC<Props> = ({ tripId }) => {
  const dispatch = useDispatch();

  const trip = useSelector<Trip>((state) => getTripById(state, tripId))!;
  const { departure, arrival } = useSelector((state) =>
    getLocationByTripId(state, tripId)
  )!;
  const operator = useSelector<Operator>(
    (state) => getOperatorByTripId(state, tripId)!
  )!;

  return (
    <TripCardLayout
      trip={trip}
      operator={operator}
      arrival_location={arrival!}
      departure_location={departure!}
    >
      <Button variant="contained" onClick={() => dispatch(selectTrip(trip))}>
        Select
      </Button>
    </TripCardLayout>
  );
};
