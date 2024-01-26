import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

interface StylesProps {
  images: string;
  isMobile: boolean;
}

export const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
  hero: (props: StylesProps) => ({
    backgroundImage: `url(${props.images})`,
    backgroundSize: "cover",
    width: props.isMobile ? "100vw" : "auto",
    height: "732px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "10rem",
    textShadow: "2px 2px 4px #000000",
    [theme.breakpoints.down("sm")]: {
      height: "14rem !important",
      width: '100vw',
      paddingLeft: "0rem",
    },
  }),
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    alignItems: 'flex-start',
    height: '55%',
    [theme.breakpoints.down("sm")]: {
      height: '100%',
      width: '100vw'
    },
  },
  text: {
    marginBottom: "1rem",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 400,
    fontSize: "56px",
    lineHeight: "60px",
    width: "50%",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      fontSize: "27px",
    },
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "23rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: 'center',
    },
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
    [theme.breakpoints.down("sm")]: {
      width: '100px',
      height: '30px',
      fontSize: '14px !important',
    },
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
    color: '#FFD020  !important',
    [theme.breakpoints.down("sm")]: {
      width: '100px',
      height: '30px',
      fontSize: '14px !important',
    },
  }
}});
