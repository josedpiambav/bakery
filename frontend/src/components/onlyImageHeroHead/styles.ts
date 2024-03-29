import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

interface StylesProps {
  images: string;
}


export const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
  hero: (props: StylesProps) => ({
    backgroundImage: `url(${props.images})`,
    backgroundSize: "cover",
    height: "732px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "2rem",
    textShadow: "2px 2px 4px #000000",
  }),
  div: {
    marginBottom: '6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down("sm")]: {
      marginBottom: '1rem'
    },
  },
  text1: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: "56px",
    color: "#FFF",
    marginBottom: 0,
    marginTop: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  text2: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: "56px",
    width: "49%",
    color: "#FFD020",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: "14rem",
    width: "23rem"
  },
  button: {
    background: "#FFD020 !important",
    width: "171px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 32px 11px 32px",
    gap: "8px",
    color: "back !important",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: '24px !important',
    lineHeight: '24px !important',
    textShadow: 'none',
  },
  button2: {
    width: "171px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 32px 11px 32px",
    gap: "8px",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: '24px !important',
    lineHeight: '24px !important',
    textShadow: 'none',
    marginLeft: '1rem !important',
    color: '#FFD020  !important'
  }
}});
