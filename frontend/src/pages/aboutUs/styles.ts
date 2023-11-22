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
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridAutoRows: '150px',
    padding: '20px',
    gridGap: '10px',
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
    "&:nth-child(1)": {
      gridColumnStart: 'span 1',
      gridRowStart: 'span 4'
    },
    "&:nth-child(2)": {
      gridColumnStart: 'span 1',
      gridRowStart: 'span 4'
    },
    "&:nth-child(3)": {
      gridColumnStart: 'span 1',
      gridRowStart: 'span 6'
    },
    "&:nth-child(4)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 1'
    },
    "&:nth-child(5)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 2'
    },
    "&:nth-child(6)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 2'
    },
    "&:nth-child(7)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 2'
    }
  },
  miniCollage1: {
    "&:nth-child(1)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 3'
    },
    "&:nth-child(2)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 3'
    }
  },
  miniCollage2: {
    "&:nth-child(1)": {
      gridColumnStart: 'span 2',
      gridRowStart: 'span 4'
    },
    "&:nth-child(2)": {
      gridColumnStart: 'span 1',
      gridRowStart: 'span 4'
    }
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
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridAutoRows: '74%',
    gridGap: '10px',
  },
  childrenDownCollage2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '135px',
    gridGap: '10px',
    marginTop: '219px',
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