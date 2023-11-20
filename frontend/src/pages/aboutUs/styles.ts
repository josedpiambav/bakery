import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentTextTitle: {
    textAlign: "center",
    marginTop: "5rem",
    marginBottom: "5rem"
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
  highlight: {
    color: '#FFD020',
  },
  root: {
    width: '100%',
  },
  collage: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    width: '100%'
  },
  mainDivCollage: {
    margin: '0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    width: '100%',
    marginBottom: '32px',
    alignItems: 'center'
  },
  miniCollageText: {

  },
  overlay: {

  },
  title: {
    fontWeight: '700 !important',
    fontSize: "56px !important",
    lineHeight: "64px !important",
    color: '#292929 !important',
    paddingLeft: '98px',
    paddingRight: '98px',
    paddingBottom: '25px',
  },
  description: {
    paddingLeft: '90px',
    paddingRight: '90px',
    paddingBottom: '25px',
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  button: {
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
  miniCollage: {

  },
  containerButton: {
    paddingLeft: '98px',
    paddingRight: '98px',
  },
  imageDownCollage: {
    width: '689px',
    height: '741px',
  },
  image3: {
    width: '388px',
    height: '329px',
  },
  image4: {
    /* width: '689px', */
    height: '329px',
  },
  image5: {
    width: '461px',
    height: '396px',
  },
  image6: {
    /* width: '689px', */
    height: '396px',
  },
  downCollage: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  childrenDownCollage: {
    height: '50%',
    display: 'flex', 
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  imageTop1: {
    width: '689px',
    height: '511px',
    objectFit: 'cover',
  },
  imageTop2: {
    width: '735px',
    height: '511px',
    objectFit: 'cover',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
})

export default useStyles;