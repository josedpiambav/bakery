import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
    img: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
        [theme.breakpoints.down("sm")]: {
          left: '47%',
        },
      },
      overlay: {
        position: 'relative',
        zIndex: 2,
        maxWidth: 0
      },
      footer: {
        minHeight: '56vh',
        justifyContent: 'center',
      },
      copyright: {
      },
      title: {
        fontWeight: '400 !important',
        fontSize: "55px !important",
        lineHeight: "60px !important",
        color: '#FFFFFF',
      },
      highlight: {
        fontWeight: '400 !important',
        fontSize: "55px !important",
        lineHeight: "60px !important",
        color: '#FFD020',
      },
      firstColumn: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
      },
      mainOffice: {
        marginBottom: '78px'
      },
      textTitle: {
        fontWeight: '100 !important',
        fontSize: "22px !important",
        lineHeight: "30px !important",
        color: '#FFD020',
        marginBottom: '25px !important'
      },
      textLinks: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: '400 !important',
        fontSize: "16px !important",
        lineHeight: "24px !important",
        color: '#FFFFFF',
        marginBottom: '12px !important',
        textDecoration: 'none'
      },
      footerText: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: '400 !important',
        fontSize: "16px !important",
        lineHeight: "18px !important",
        color: '#ffffff33 !important',
        marginBottom: '12px !important'
      }
  }});

export default useStyles;
