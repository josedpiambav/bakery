import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(({
    img: {
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1,
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
        fontFamily: "'Kulim Park' !important",
        fontWeight: '700 !important',
        fontSize: "25px !important",
        lineHeight: "64px !important",
        color: '#FFFFFF',
      },
      highlight: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: '700 !important',
        fontSize: "25px !important",
        lineHeight: "64px !important",
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
        marginBottom: '12px !important'
      },
      footerText: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: '400 !important',
        fontSize: "16px !important",
        lineHeight: "18px !important",
        color: '#ffffff33 !important',
        marginBottom: '12px !important'
      }
  }));

export default useStyles;
