import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    backgroundColor: "#fffcf2",
    textAlign: "center",
    height: "303px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '70px'
  },
  tag: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    width: '261px',
    marginBottom: '24px',
    fontFamily: "'Kulim Park' !important",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
  },
  smallDiv: {
    background: '#f7f7f7',
    padding: '8px',
    borderRadius: '22px',
  },
  mainTitle: {
    fontWeight: '700 !important',
    fontSize: "56px",
    lineHeight: "64px",
    color: '#FFD020'
  },
  mainBody: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  body: {
    textAlign: "center",
    textJustify: "inter-word",
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
  },
  contentText: {
    textAlign: "start",
    marginBottom: '60px'
  },
  text: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "32px",
  },
  titleText: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700 !important',
    fontSize: "26px",
    lineHeight: "40px",
    marginBottom: '35px'
  },
  footerText: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700 !important',
    fontSize: "22px",
    lineHeight: "30px",
    textAlign: "start",
    marginBottom: '25px'
  },
  contentButton: {
    textAlignLast: 'center',
    marginTop: '29px',
    marginBottom: '120px',
  },
  button: {
    borderRadius: '8px',
    padding: '15px 32px 15px 32px',
    background: '#FFD020 !important',
    fontWeight: '700 !important',
    fontSize: "24px !important",
    lineHeight: "24px !important",
    color: '#3F3939 !important',
    width: '146px',
    height: '50px'
  },
});

export default useStyles;
