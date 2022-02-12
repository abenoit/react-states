import React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LocationOn from "@mui/icons-material/LocationOn";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useStyles } from "./trip.styles";

interface Props {}

export const Trip: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column">
            <Stack direction="row" alignItems="center">
              <LocationOn color="primary" />
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
                pl={2}
              >
                10:00AM
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
                10:00AM
              </Typography>
              <Typography variant="body1" color="text.primary" pl={2}>
                Destination
              </Typography>
            </Stack>
          </Stack>

          <Button variant="contained" onClick={() => console.log("select")}>
            Select
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};
