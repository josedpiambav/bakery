import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cards: {
    width: '340px',
    maxWidth: '100%',
    marginLeft: '25px',
    marginRight: '25px',
    height: '452px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '24px'
  },
  tile: {
    color: '#FFD020',
    fontWeight: '700  !important"',
    fontSize: "32px !important",
    lineHeight: "32px !important",
  },
  description: {
    color: '#292929',
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "16px !important",
    lineHeight: "24px !important",
  },
  progressBar: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '39px'
  },
  progressNumber: {
    width: '156px',
  },
  number: {
    textAlignLast: 'center',
    color: '#FFD020',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '20px',
  },
  linearProgress: {
    width: '22%'
  },
  buttonsProgress: {

  }
})

export default useStyles;