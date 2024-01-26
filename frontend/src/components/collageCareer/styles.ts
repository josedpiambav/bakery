import { Theme } from '@mui/system';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  miniCollage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  title: {
    fontWeight: "700 !important",
    fontSize: "56px !important",
    lineHeight: "64px !important",
    color: "#292929 !important",
    paddingLeft: "98px",
    paddingRight: "98px",
    paddingBottom: "25px",
    [theme.breakpoints.down('sm')]: {
      padding: '25px',
    },
  },
  description: {
    paddingLeft: "90px",
    paddingRight: "90px",
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "26px !important",
    lineHeight: "24px !important",
    [theme.breakpoints.down('sm')]: {
      padding: '25px',
      fontSize: "16px !important",
    },
  },
  title2: {
    fontWeight: "400 !important",
    fontSize: "32px !important",
    lineHeight: "32px !important",
    color: "#292929 !important",
    [theme.breakpoints.down('sm')]: {
      fontSize: "17px !important",
    },
  },
  description2: {
    paddingBottom: "25px",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "29px !important",
    lineHeight: "32px !important",
    color: '#FFD020',
    width: '67%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: "0px",
      fontSize: "20px !important",
    },
  },
  description3: {
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    [theme.breakpoints.down('sm')]: {
      fontSize: "14px !important",
    },
  },
  containerButton: {
    paddingLeft: "98px",
    paddingRight: "98px",
    [theme.breakpoints.down('sm')]: {
      marginBottom: '39px'
    },
  },
  containerButton2: {
    width: '67%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
    [theme.breakpoints.down('sm')]: {
      margin: '22px 0px 25px'
    },
  },
  button: {
    backgroundColor: "#3F3939 !important",
    color: "yellow !important",
    width: "177px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 32px 11px 32px",
    fontFamily: "'Bebas Neue'",
    fontWeight: "200 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    "&:hover": {
      backgroundColor: "darken(black, 0.2)",
    },
  },
  button2: {
    backgroundColor: "#FFD020 !important",
    color: "#3F3939 !important",
    width: "177px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 131px 11px 131px",
    fontFamily: "'Bebas Neue'",
    fontWeight: "200 !important",
    fontSize: "20px !important",
    lineHeight: "24px !important",
    "&:hover": {
      backgroundColor: "darken(black, 0.2)",
    },
  },
  miniCollageImgTop: {
    flex: '0 0 50%',
  },
  imageTop: {
    display: 'table-header-group',
    width: '-webkit-fill-available',
  },
  image: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
  },
  miniCollageDown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 'max-content',
  },
  imageDown: {
    height: '100%',
    objectFit: 'cover',
  },
  image1: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
  },
  image2: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
  },
  image3: {
    width: 'auto',
    height: 'auto',
    objectFit: 'cover',
  },

  root: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  leftDiv: {
    flex: '0 0 47%',
    backgroundColor: 'grey',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  rightDiv: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    height: '100%',
  },
  topRightDiv: {
    display: 'flex',
    flexDirection: 'row',
    flex: '1',
  },
  smallImage1: {
    flex: '0 0 50%',
    backgroundColor: 'grey',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  textDiv: {
    flex: '1',
    backgroundColor: '#FFD020 !important',
    height: '100%',
    display: 'flex',
    width: 'auto',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(255 208 32)',
    fontWeight: '700  !important"',
    fontSize: "40px !important",
    lineHeight: "56px !important",
    [theme.breakpoints.down('sm')]: {
      padding: '22px',
    },
  },
  smallImage2: {
    flex: '0 0 50%',
    backgroundColor: 'grey',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
  smallImage3: {
    flex: '1',
    backgroundColor: 'grey',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: 'auto',
    },
  },
}));

export default useStyles;
