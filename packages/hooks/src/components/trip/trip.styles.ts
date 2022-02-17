import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  origin: {
    paddingLeft: "16px",
    maxWidth: "300px",
  },
  line: {
    position: "relative",
    height: "10px",
    width: "24px",
    "&:after": {
      content: "''",
      position: "absolute",
      borderRight: "1px dashed grey",
      top: "10%",
      bottom: "10%",
      left: "50%",
    },
  },
});
