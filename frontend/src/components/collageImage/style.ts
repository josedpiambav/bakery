import { makeStyles } from '@mui/styles';
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
  mainImage: {
    width: '100%',
    height: '967px',
    backgroundSize: '100% 100%',
  },
  sideImage1: {
    width: '100%',
    height: '350px',
    backgroundSize: '100% 100%',
  },
  sideImage2: {
    width: '100%',
    height: '618px',
    backgroundSize: '100% 100%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
      height: '27rem',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    },
  },
  bottomImage: {
    width: '100%',
    height: '483px',
    backgroundSize: '100% 100%',
    [theme.breakpoints.down("sm")]: {
      height: '14rem',
      width: '100vw',
    },
  },
  title: {
    fontWeight: '700 !important',
    fontSize: "40px !important",
    lineHeight: "56px !important",
    color: '#292929 !important',
    paddingLeft: '98px',
    paddingRight: '98px',
    paddingBottom: '25px',
  },
}});

export default useStyles;