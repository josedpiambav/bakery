import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    marginTop: "84px",
    marginBottom: "61px",
  },
  left: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    width: "50%",
  },
  right: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    width: "50%",
    height: "1600px",
  },
  image: {
    width: "521px",
    height: "622px",
  },
  contentText: {
    marginTop: "13rem",
    marginLeft: "-121px",
  },
  title: {
    fontWeight: "700 !important",
    fontSize: "56px !important",
    lineHeight: "64px !important",
    width: "311px",
  },
  description: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "32px",
    width: "391px",
  },
  contentbutton: {
    marginTop: "75px",
  },
  button: {
    width: "146px",
    height: "50px",
    padding: "15px 32px 11px 32px",
    fontWeight: "700 !important",
    fontSize: "24px !important",
    lineHeight: "24px",
  },
  overlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
  backgroundImage: {
    position: "absolute",
    top: "0",
    width: "627px",
    height: "742px",
  },
  backgroundImage2: {
    position: "absolute",
    bottom: "0",
    width: "627px",
    height: "742px",
  },
  image2: {
    position: "absolute",
    top: "29%",
    left: "25%",
    width: "521px",
    height: "770px",
    zIndex: "1",
  },
  image3: {
    position: "absolute",
    top: "63%",
    left: "8%",
    width: "300px",
    height: "334px",
    zIndex: "2",
  },
  rootCards: {
    marginTop: '91px',
    paddingLeft: '68px',
  },
  titleCareer: {
    fontWeight: '400 !important',
    fontSize: "53px !important",
    lineHeight: "58px !important",
    marginBottom: "15px !important"
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
  contentCards: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: '46px'
  },
  card: {
    width: '388px',
    height: '176px',
    borderRadius: '16px',
    padding: '18px 22px 18px 22px',
    marginRight: '32px',
    marginBottom: '32px',
  },
  smallDiv: {
    background: '#f4f4f4',
    padding: '8px',
    borderRadius: '5px',
  },
  times: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '68%',
    marginBottom: '25px'
  },
  titleCard: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700 !important',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    color: '#292929'
  },
  descriptionCard: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: 400,
    fontSize: "14px !important",
    lineHeight: "20px !important",
    marginBottom: "25px !important"
  },
  priceAndButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  priceCard: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: 400,
    fontSize: "20px !important",
    lineHeight: "32px !important",
  },
  buttonCard: {
    width: '86px',
    height: '35px',
    borderRadius: '10px',
    padding: '11px 28px 11px 28px',
    background: '#FFD020 !important',
    fontWeight: '700 !important',
    fontSize: "16px !important",
    lineHeight: "16px !important",
  }
});

export default useStyles;
