import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
  contained: {
    display: 'flex',
    marginTop: '100px',
    [theme.breakpoints.down("sm")]: {
      width: '100%'
    },
  },

  productInfo: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    padding: "20px",
  },
}});

export default useStyles;
