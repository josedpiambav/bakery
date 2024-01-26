import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyles = makeStyles(() => {
  const theme = useTheme();
  return {
    title: {
      fontFamily: 'Bebas Neue',
      fontWeight: '400 !important',
      fontSize: theme.breakpoints.down('sm') ? '32px' : '56px',
      lineHeight: theme.breakpoints.down('sm') ? '38.4px' : '67.2px',
      color: '#292929 !important'
    },
    text: {
      fontFamily: 'Kulim Park !important',
      fontWeight: '400 !important',
      fontSize: '20px !important',
      lineHeight: '32px !important',
      color: '#292929 !important'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      height: theme.breakpoints.down('sm') ? 'calc(244vh - 79px)' : '238vh',
      [theme.breakpoints.down("sm")]: {
        height: 'calc(593vh - 79px)',
      },
    },
    textContainer: {
      flex: '1',
      overflow: 'auto'
    }
  };
});
