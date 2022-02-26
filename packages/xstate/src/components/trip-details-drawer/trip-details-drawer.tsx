import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { useStyles } from "./trip-details-drawer.styles";
import { Operator } from "../operator";
import { TripStops } from "../trip-stops";
import { formatTime, findLocationById, findOperatorById } from "../utils";

interface Props {
  isOpened?: boolean;
  onClose: () => void;
  selectedTrip: Trip | undefined;
  locations: Locations;
  operators: Operators;
}

export const TripDetailsDrawer: React.FC<Props> = ({
  selectedTrip,
  isOpened = false,
  operators,
  locations,
  onClose,
}) => {
  const classes = useStyles();

  if (!selectedTrip) return null;

  const origin = findLocationById(selectedTrip.origin_location_id, locations);
  const destination = findLocationById(
    selectedTrip.destination_location_id,
    locations
  );
  const operator = findOperatorById(selectedTrip.operator_id, operators);

  return (
    <Drawer anchor="right" open={isOpened} onClose={onClose}>
      <Stack spacing={3} p={2}>
        {operator && <Operator size="xl" operator={operator} />}
        <Stack direction="row" alignItems="center" className={classes.root}>
          <Typography variant="h6" color="text.secondary" fontWeight="bold">
            Origin:
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight="bold">
            {formatTime(selectedTrip.departure_time)}
          </Typography>
          <Typography variant="body1" color="text.secondary" noWrap>
            {origin?.name}
          </Typography>
        </Stack>
        <TripStops tripStops={selectedTrip.trip_stops} />
        <Stack direction="row" alignItems="center">
          <Typography variant="h6" color="text.primary" fontWeight="bold">
            Destination:
          </Typography>
          <Typography variant="body2" color="text.primary" fontWeight="bold">
            {formatTime(selectedTrip.arrival_time)}
          </Typography>
          <Typography variant="body1" color="text.primary" pl={2}>
            {destination?.name}
          </Typography>
        </Stack>
        <Typography variant="h6" color="text.tertiary">
          {selectedTrip.prices.total / 100} {selectedTrip.prices.currency}
        </Typography>
        <Typography variant="h6" color="text.tertiary">
          {selectedTrip.available_seats} Seats available
        </Typography>
      </Stack>
    </Drawer>
  );
};
