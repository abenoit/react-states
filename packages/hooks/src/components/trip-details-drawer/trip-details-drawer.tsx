import Drawer from "@mui/material/Drawer";

import { useStyles } from "./trip-details-drawer.styles";

interface Props {
  isOpened?: boolean;
  onClose: () => void;
}

export const TripDetailsDrawer: React.FC<Props> = ({
  isOpened = false,
  onClose,
}) => {
  const classes = useStyles();

  return (
    <Drawer
      anchor="right"
      open={isOpened}
      onClose={onClose}
      className={classes.root}
    >
      Some trip details
    </Drawer>
  );
};
