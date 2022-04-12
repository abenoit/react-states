import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationOn from "@mui/icons-material/LocationOn";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import Seat from "@mui/icons-material/AirlineSeatReclineExtra";
import Sell from "@mui/icons-material/Sell";
import { useDispatch, useSelector } from "../../store/hooks";

import { useStyles } from "./trip-details-drawer.styles";
import { Operator } from "../operator";
import { TripStops } from "../trip-stops";
import { formatTime, findLocationById, findOperatorById } from "../utils";
import { unSelectTrip } from "../../store/actions";

interface Props {}

export const TripDetailsDrawer: React.FC<Props> = ({}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedTrip = useSelector((state) => state.selectedTrip);
  const operators = useSelector((state) => state.operators);
  const locations = useSelector((state) => state.locations);

  if (!selectedTrip) return null;

  const origin = findLocationById(selectedTrip.origin_location_id, locations);
  const destination = findLocationById(
    selectedTrip.destination_location_id,
    locations
  );
  const operator = findOperatorById(selectedTrip.operator_id, operators);

  return (
    <Drawer
      anchor="right"
      open={!!selectedTrip}
      onClose={() => dispatch(unSelectTrip())}
    >
      <Stack spacing={3} p={2}>
        {operator && <Operator size="xl" operator={operator} />}
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
          spacing={2}
        >
          <Stack direction="column">
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
            >
              {formatTime(selectedTrip.departure_time)}
            </Typography>
            <Typography variant="body1" color="text.secondary" noWrap>
              {origin?.name}
            </Typography>
          </Stack>
          <ArrowForwardIos color="primary" />
          <Stack direction="column">
            <Typography variant="body2" color="text.primary" fontWeight="bold">
              {formatTime(selectedTrip.arrival_time)}
            </Typography>
            <Typography variant="body1" color="text.primary">
              {destination?.name}
            </Typography>
          </Stack>
        </Stack>
        <TripStops tripStops={selectedTrip.trip_stops} />
        <Stack
          direction="row"
          alignItems="center"
          className={classes.root}
          spacing={1}
        >
          <Sell color="primary" />
          <Typography variant="h6" color="text.primary">
            {selectedTrip.prices.total / 100} {selectedTrip.prices.currency}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          className={classes.root}
          spacing={1}
        >
          <Seat color="primary" />
          <Typography variant="h6" color="text.tertiary">
            {selectedTrip.available_seats} Seats available
          </Typography>
        </Stack>
      </Stack>
    </Drawer>
  );
};
