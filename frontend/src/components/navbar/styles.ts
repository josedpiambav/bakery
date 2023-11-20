import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  preNavbar: {
    height: "26px",
    width: "100%",
    top: "-1px",
    background: "#DDDEDE",
  },
  logo: {},
  containerNavbar: {
    placeItems: "center",
    height: '6rem'
  },
  itemsNavbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "88%",
    height: '100%'
  },
  containerNavAndLogo: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "50%",
    height: '100%'
  },
  textNavbar: {
    fontFamily: "'Bebas Neue', sans-serif",
    color: 'black',
    fontWeight: '700',
    fontSize: '18px',
    lineHeight: '24px',
    textDecoration: 'none',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      color: 'blue',
    },
    '&:active': {
      color: 'red',
    },
    '&::before': {
      content: 'attr(data-text)',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      color: 'blue',
      overflow: 'hidden',
      transition: 'transform 0.5s',
      whiteSpace: 'nowrap',
      transform: 'translateX(-100%)',
    },
    '&:hover::before': {
      transform: 'translateX(0)',
    },
  },
  button: {
    background: '#FFD020 !important',
    width: '151px',
    height: '50px',
    borderRadius: '8px',
    padding: '15px 32px 11px 32px',
    gap: '8px',
    fontSize: '24px !important',
    fontWeight: '700 !important',
    lineHeight: '24px !important',
  }
});

export default useStyles;
