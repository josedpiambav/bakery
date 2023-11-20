import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentText: {
    textAlign: "center",
    marginTop: "85px",
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '85px'
  },
  dividerDiv: {
    width: '54%'
  },
  title: {
    fontWeight: "700 !important",
    fontSize: "56px !important",
    lineHeight: "67px",
    color: '#FFD020',
    paddingBottom: '21px'
  },
  description: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
    lineHeight: "32px !important",
  },
  contentCards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start",
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
  contentButton: {
    textAlignLast: 'center',
    marginTop: '29px',
    marginBottom: '27rem',
  },
  button: {
    borderRadius: '8px',
    padding: '11px 28px 8px 28px',
    background: '#FFD020 !important',
    fontWeight: '700 !important',
    fontSize: "16px !important",
    lineHeight: "16px !important",
    color: '#3F3939 !important',
    width: '156px',
    height: '35px'
  },
});

export default useStyles;
