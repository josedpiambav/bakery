import { makeStyles } from "@mui/styles";

interface MyComponentProps {
  imageUrl: string;
  title1: string;
  title2: string;
  description?: string;
  buttonText?: string;
}

const useStyles = makeStyles({
  root: {
    backgroundImage: (props: MyComponentProps) => `url(${props.imageUrl})`,
    backgroundSize: "cover",
    width: "100%",
    height: '958px',
    color: "white",
    padding: "1em",
  },
  content: {
    textAlign: '-webkit-center' as any,
    marginBottom: '52px',
  },
  title1: {
    color: "white",
    fontFamily: "'Bebas Neue'",
    fontWeight: '700  !important"',
    fontSize: "56px !important",
    lineHeight: "64px !important",
  },
  title2: {
    color: "#FFD020",
    fontFamily: "'Bebas Neue'",
    fontWeight: '700  !important"',
    fontSize: "56px !important",
    lineHeight: "64px !important",
  },
  description: {
    color: "white",
    fontFamily: "'Kulim Park' !important",
    fontWeight: '400  !important"',
    fontSize: "20px !important",
    lineHeight: "32px !important",
    width: '54%',
    marginBottom: '35px !important'
  },
  button: {
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
});

export default useStyles;
