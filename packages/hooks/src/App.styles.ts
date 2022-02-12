import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  subtitle: { paddingTop: "12px", paddingLeft: "8px" },
  tripsContainer: {
    padding: "20px",

    "& > :not(:last-child)": {
      marginBottom: "20px",
    },
  },
});
