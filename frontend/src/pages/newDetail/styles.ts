import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

export const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
    mainBody: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '16em',
        [theme.breakpoints.down("sm")]: {
          width: '100%',
        },
      },
      body: {
        textAlign: "center",
        textJustify: "inter-word",
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
      },
      head: {

      },
      contentText: {
        textAlign: "start",
        marginBottom: '60px',
      },
      contentImg: {
        alignSelf: 'center',
        marginBottom: '60px',
      },
      text: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: 400,
        fontSize: "25px !important",
        lineHeight: "32px !important",
        [theme.breakpoints.down("sm")]: {
          fontSize: "16px !important",
        },
      },
      titleText: {
        fontWeight: '700 !important',
        fontSize: "56px !important",
        lineHeight: "264px !important",
        [theme.breakpoints.down("sm")]: {
          fontSize: "30px !important",
          lineHeight: "56px !important",
        },
      },
      line: {
        borderBottom: '1px solid #29292933',
        width: '89%',
        margin: '0 auto',
      },
      titleTextFooter: {
        fontWeight: '700 !important',
        fontSize: "56px !important",
        lineHeight: "264px !important",
        paddingLeft: '90px'
      },
      contentCards: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        [theme.breakpoints.down("sm")]: {
          flexDirection: 'column'
        },
      },
      card: {
        width: "411px",
        height: "auto",
        marginBottom: "70px",
        elevation: 0,
        border: "none",
      },
      media: {
        objectFit: "cover",
        paddingTop: "0",
      },
      contentTextCard: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        justifyContent: 'center',
        textAlign: 'start',
      },
      titleCard: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: "700 !important",
        fontSize: "24px !important",
        lineHeight: "36px !important",
        marginBottom: '22px !important'
      },
      descriptionCard: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: "400 !important",
        fontSize: "16px !important",
        lineHeight: "24px !important",
      },

}});

export default useStyles;