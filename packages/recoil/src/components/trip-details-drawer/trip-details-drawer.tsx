import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRecoilValue, useRecoilState } from "recoil";

import { useStyles } from "./trip-details-drawer.styles";
import { Operator } from "../operator";
import { TripStops } from "../trip-stops";
import { formatTime } from "../utils";

import {
  selectedTripOperatorState,
  tripLocationsState,
  selectedTripDataState,
} from "../../atoms/selectors";

export const TripDetailsDrawer: React.FC = () => {
  const classes = useStyles();
  const [trip, selectTrip] = useRecoilState(selectedTripDataState);
  const operator = useRecoilValue(selectedTripOperatorState);
  const locations = useRecoilValue(tripLocationsState);
  console.log(trip, operator, locations);
  if (!trip) return null;

  return (
    <Drawer anchor="right" open={!!trip} onClose={() => selectTrip(null)}>
      <Stack spacing={3} p={2}>
        {operator && <Operator size="xl" operator={operator} />}
        <Stack direction="row" alignItems="center" className={classes.root}>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            Origin:
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {formatTime(trip.departure_time)}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {locations?.origin?.name}
          </Typography>
        </Stack>
        <TripStops tripStops={trip.trip_stops} />
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            Destination:
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            {formatTime(trip.arrival_time)}
          </Typography>
          <Typography variant="body1" color="text.primary" pl={2}>
            {locations?.destination?.name}
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.tertiary">
          {trip.prices.total / 100} {trip.prices.currency}
        </Typography>
        <Typography variant="h6" color="text.tertiary">
          {trip.available_seats} Seats available
        </Typography>
      </Stack>
    </Drawer>
  );
};
