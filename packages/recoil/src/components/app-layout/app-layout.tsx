import { AppBar, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useStyles } from "./app-layout.styles";

export const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h4" color="inherit" component="div">
            🚌 Trips for Devoxx
          </Typography>
          <Typography
            variant="subtitle2"
            fontWeight="normal"
            component="span"
            className={classes.subtitle}
          >
            powered by Busbud
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.tripsContainer}>{children}</div>
    </ThemeProvider>
  );
};
