import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentTextTitle: {
    textAlign: "center",
    marginTop: "5rem",
  },
  tileText: {
    fontFamily: "'Bebas Neue'",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: "64px",
    marginBottom: "0px",
  },
  paragraphContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  paragraph: {
    fontFamily: "'Kulim Park'",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "32px",
    width: "46%",
  },
  card: {
    width: "411px",
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
  button: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: "#C4C4C4",
    position: "absolute",
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
  title: {
    marginBottom: "10px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '600  !important"',
    fontSize: "18px",
    lineHeight: "12px",
  },
  description: {
    textAlign: 'start',
    fontFamily: "'Kulim Park' !important",
    fontWeight: '600  !important"',
    fontSize: "18px",
    lineHeight: "12px",
  },
  grid: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    transition: "transform 0.5s",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1000px",
  },
  mainCarousel: {
    textAlign: "-webkit-center" as any,
  },
  carousel: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .react-multi-carousel-item": {
      transition: "transform 500ms ease-in-out",
    },
    "& .react-multi-carousel-track": {
      display: "flex",
    },
  },
  buttonShop: {
    textAlign: 'center',
    margin: '50px 0px 90px 0px'
  },
  customButton: {
    backgroundColor: "#3F3939 !important",
    color: "yellow !important",
    width: "177px",
    height: "50px",
    borderRadius: "8px",
    padding: '15px 32px 11px 32px',
    fontFamily: "'Bebas Neue'",
    fontWeight: '200 !important',
    fontSize: '20px !important',
    lineHeight: '24px !important',
    "&:hover": {
      backgroundColor: "darken(black, 0.2)",
    },
  },
  vector: {
    margin: '150px 0px 150px 0px',
    height: '642px'
  },
  content: {
    height: '100%'
  },
  contentVector: {
    placeSelf: 'center',
    paddingLeft: '92px !important'

  },
  textVector: {
    fontFamily: "'Bebas Neue'",
    fontWeight: '700  !important"',
    fontSize: "56px !important",
    lineHeight: "64px !important",
  },
  rootLastComponent: {
    backgroundColor: 'grey',
    padding: '1em',
  },
  container: {
    padding: '98px 200px 98px 200px',
    margin: '50px 0px 50px 0px',
  },
  imageLastComponent: {
    width: '100%',
    height: '395px',
    backgroundSize: 'cover',
  },
  containerText: {
    marginBottom: '3.8%',
    paddingLeft: '73px',
    paddingRight: '40px',
    marginTop: '18px',
  },
  textIconLastComponent: {
    backgroundColor: '#3F3939',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '488px',
    padding: '8px 40px 8px 40px',
    marginBottom: '20px',
  },
  iconImg: {
    width: '40px', 
    height: '40px', 
    color: '#FFD020'
  },
  textImg: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700 !important',
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: '#FFFFFF'
  },
  titleCollageImg: {
    fontWeight: '700 !important',
    fontSize: "56px !important",
    lineHeight: "64px !important",
    color: '#3F3939'
  },
  descriptionCollageImg: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400 !important',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    color: '#000000',
    marginBottom: "30px !important"
  },
  buttonCollateImg: {
    background: "#FFD020 !important",
    width: "171px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 32px 11px 32px",
    gap: "8px",
    color: "back !important",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: '24px !important',
    lineHeight: '24px !important',
    textShadow: 'none',
  },
  root: {
    backgroundColor: '#A8A09F',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingTop: '125px',
    paddingRight: '227px',
    paddingBottom: '125px',
    placeItems: 'center',
  },
  classesMainGrid: {
    width: '1059px !important',
  },
  imageContainer: {
    height: '395px',
    width: '529px',
    backgroundSize: 'cover',
    position: 'relative',
  },
  alterGrid: {
    display: 'flex',
    alignContent: 'space-between',
    flexWrap: 'wrap',
  },
  textIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#3F3939',
    marginBottom: '14px',
    width: '406px',
    height: '27px',
    padding: '20px'
  },
  textRoot: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '700 !important',
    fontSize: "24px !important",
    lineHeight: "32px !important",
    color: '#FFFFFF',
  },
  containerTextRoot: {
    paddingLeft: '56px',
    width: '642px',
    height: '208px',
    paddingTop: '45px'
  },
  textTitleRoot: {
    fontWeight: '700 !important',
    fontSize: "56px !important",
    lineHeight: "64px !important",
    color: '#3F3939',
    width: '660px'
  },
  descriptionRoot: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400 !important',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    color: '#000000',
    marginBottom: '14px !important'
  },
  buttonRoot: {
      background: "#FFD020 !important",
      width: "171px",
      height: "50px",
      borderRadius: "8px",
      padding: "15px 32px 11px 32px",
      gap: "8px",
      color: "back !important",
      fontFamily: "'Bebas Neue', sans-serif",
      fontWeight: '700 !important',
      fontSize: '24px !important',
      lineHeight: '24px !important',
      textShadow: 'none',
  },
  largeImage: {
    height: '537px',
    width: '751px',
    backgroundSize: 'cover',
  },
});

export default useStyles;
