import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    justifyContent: "center",
    textAlignLast: "center",
  },
  imgContent: {},
  image: {
    /* width: '100%', */
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    marginLeft: 2,
    marginRight: "150px",
  },
  titleMedium: {
    fontWeight: '700  !important"',
    fontSize: "14px !important",
    lineHeight: "14px !important",
  },
  titleHead: {
    paddingBottom: "2px",
    paddingTop: "25px",
    fontWeight: '400  !important"',
    fontSize: "56px !important",
    lineHeight: "60px !important",
  },
  descriptionHeadContent: {
    width: "100%",
    textAlign: "-webkit-center" as any,
  },
  titleLarge: {
    paddingTop: "25px",
    fontWeight: '400  !important"',
    fontSize: "32px !important",
    lineHeight: "32px !important",
    paddingBottom: '33px',
  },
  containerDes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '600  !important"',
    fontSize: "32px !important",
    lineHeight: "44px !important",
  },
  descriptionHead: {
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    width: "50%",
    color: "#6a6a6a"
  },
  description: {
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
    width: "69%",
    color: "rgb(81 117 149)"
  },
  description1: {
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  initTable: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700  !important"',
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: '#979797  !important',
    width: '62%',
  },
  je: {
    fontWeight: '700  !important"',
    fontSize: "20px !important",
    lineHeight: "28px !important",
    color: '#979797  !important',
  },
  name: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: '#979797  !important'
  },
  value: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
    color: '#979797  !important'
  },
  contentButton: {
    marginBottom: "59px",
  },
  button: {
    marginTop: 2,
    width: "160px",
    fontWeight: '700  !important"',
    fontSize: "24px !important",
    lineHeight: "24px !important",
  },
  dropdown: {
    cursor: "pointer",
    userSelect: "none",
    "&:hover": {
      backgroundColor: "#ddd",
    },
  },
  dropdownContent: {
    display: "none",
    position: "absolute",
    backgroundColor: "#f1f1f1",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    zIndex: 1,
    "& div:hover": {
      backgroundColor: "#ddd",
    },
  },
  show: {
    display: "block",
  },
  dropDownMenu: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  componentCard: {
    marginBottom: "105px",
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
    borderBottom: "1px solid rgb(148, 148, 148)",
    boxShadow: "none",
    borderRadius: "0 !important",
  },
  type: {
    textAlign: "start",
    fontWeight: "100 !important",
    fontSize: "12px",
    lineHeight: "12px",
    marginBottom: "22px !important",
  },
  contentTittlePrice: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "'Kulim Park'",
  },
  categoryTitle: {
    fontWeight: '700  !important"',
    fontSize: "56px !important",
    lineHeight: "64px !important",
    marginLeft: "43px !important",
  },
  title: {
    marginBottom: "10px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '600  !important"',
    fontSize: "18px",
    lineHeight: "12px",
  },
  descriptionCard: {
    textAlign: "start",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '600  !important"',
    fontSize: "18px",
    lineHeight: "12px",
  },
  contentCardProducts: {
    display: "flex",
    justifyContent: "space-between",
  },
  viewMore: {
    textAlignLast: "center",
  },
}));

export default useStyles;
