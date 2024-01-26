import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => {

  const theme = useTheme();
  return {
  mainContent: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
    headContent: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    titleHead: {
        fontWeight: '700  !important"',
        fontSize: "56px !important",
        lineHeight: "64px !important",
    },
    descriptionHead: {
        fontFamily: "'Kulim Park' !important",
        fontWeight: '400  !important"',
        fontSize: "20px !important",
        lineHeight: "32px !important",
        width: '50%',
    },
    buttonsHead: {
        marginTop: '25px',
        marginBottom: '25px',
    },
    search: {
        width: '41%',
        marginBottom: '25px !important',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      padding: 2,
      marginBottom: '230px'
    },
    imgContent: {
      width: '100%',
      height: '696px',
      marginLeft: '200px'
    },
    image: {
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginLeft: 2,
      marginRight: '150px'
    },
    titleMedium: {
      fontWeight: '700  !important"',
      fontSize: "14px !important",
      lineHeight: "14px !important",
    },
    titleLarge: {
      paddingBottom: '2px',
      paddingTop: '25px',
      fontFamily: "'Kulim Park' !important",
      fontWeight: '600  !important"',
      fontSize: "40px !important",
      lineHeight: "56px !important",
    },
    price: {
      paddingBottom: '25px',
      fontFamily: "'Kulim Park' !important",
      fontWeight: '600  !important"',
      fontSize: "32px !important",
      lineHeight: "44px !important",
    },
    description: {
      paddingBottom: '25px',
      fontFamily: "'Kulim Park' !important",
      fontWeight: '400  !important"',
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
    contentButton: {
      marginBottom: '59px',
    },
    button: {
      marginTop: 2,
      width: '160px',
      fontWeight: '700  !important"',
      fontSize: "24px !important",
      lineHeight: "24px !important",
    },
    dropdown: {
      cursor: 'pointer',
      userSelect: 'none',
      '&:hover': {
        backgroundColor: '#ddd',
      },
    },
    dropdownContent: {
      display: 'none',
      position: 'absolute',
      backgroundColor: '#f1f1f1',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      zIndex: 1,
      '& div:hover': {
        backgroundColor: '#ddd',
      },
    },
    show: {
      display: 'block',
    },
    dropDownMenu: {
      fontFamily: "'Kulim Park' !important",
      fontWeight: '700  !important"',
      fontSize: "16px !important",
      lineHeight: "24px !important",
    },
    componentCard: {
      marginBottom: '105px',
      [theme.breakpoints.down("sm")]: {
        width: "100%",
      },
    },
    card: {
      width: "auto",
      height: "559px",
      margin: "10px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F8F8F8",
      marginBottom: "10px",
      marginRight: "10px",
      borderBottom: '1px solid rgb(148, 148, 148)',
      boxShadow: 'none',
      borderRadius: '0 !important',
    },
    type: {
      textAlign: 'start',
      fontWeight: '100 !important',
      fontSize: "12px",
      lineHeight: "12px",
      marginBottom: "22px !important"
    },
    contentTittlePrice: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'Kulim Park'"
    },
    categoryTitle: {
      fontWeight: '700  !important"',
      fontSize: "56px !important",
      lineHeight: "64px !important",
      marginLeft: '43px !important'
    },
    title: {
      marginBottom: "10px",
      fontFamily: "'Kulim Park' !important",
      fontWeight: '600  !important"',
      fontSize: "18px",
      lineHeight: "12px",
    },
    descriptionCard: {
      textAlign: 'start',
      fontFamily: "'Kulim Park' !important",
      fontWeight: '600  !important"',
      fontSize: "18px",
      lineHeight: "12px",
    },
    contentCardProducts: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    viewMore: {
      textAlignLast: 'center',
    },
    buttonCareer: {
        background: '#FFFFFF !important',
        borderRadius: '5px !important',
        color: 'black !important',
      },
      buttonCareerSelect: {
        background: '#3F3939 !important',
        borderRadius: '5px !important',
        color: '#FFD020 !important',
      },
  }});

  export default useStyles;