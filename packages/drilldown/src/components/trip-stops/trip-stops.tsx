import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { isOriginOrDestination } from "../utils";

interface Props {
  tripStops: Stop[] | undefined;
}

const Stop: React.FC<{ stop: Stop }> = ({ stop }) => (
  <Typography variant="body1" color="text.primary" pl={2} component="li">
    {stop.name} - {stop.duration} minutes
  </Typography>
);

export const TripStops: React.FC<Props> = ({ tripStops }) => {
  if (!tripStops || !tripStops.length || tripStops.length <= 2) return null;

  return (
    <Stack>
      <Typography variant="h6" color="text.primary" fontWeight="bold">
        Stops:
      </Typography>
      <ul>
        {tripStops.map(
          (stop, index) =>
            !isOriginOrDestination(index, tripStops) && <Stop stop={stop} />
        )}
      </ul>
    </Stack>
  );
};
