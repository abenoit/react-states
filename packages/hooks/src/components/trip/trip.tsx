import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOn from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useStyles } from "./trip.styles";

interface Props {
  data: Trip;
  locations: Locations;
  operators: Operators;
  onSelect: () => void;
}

interface TripProp {
  trip: Trip;
}

const TripSummary: React.FC<TripProp> = ({ trip }) => {
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
          {trip.departureTime}
        </Typography>
        <Typography variant="body1" color="text.secondary" pl={2}>
          Origin
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
          {trip.arrivalTime}
        </Typography>
        <Typography variant="body1" color="text.primary" pl={2}>
          Destination
        </Typography>
      </Stack>
    </Stack>
  );
};

const TripCardLayout: React.FC<TripProp> = ({ trip, children }) => (
  <Card sx={{ maxWidth: 500 }}>
    <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <TripSummary trip={trip} />
        {children}
      </Stack>
    </CardContent>
  </Card>
);

export const Trip: React.FC<Props> = ({ data, onSelect }) => {
  return (
    <TripCardLayout trip={data}>
      <Button variant="contained" onClick={onSelect}>
        Select
      </Button>
    </TripCardLayout>
  );
};
