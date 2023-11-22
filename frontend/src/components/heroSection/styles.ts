import { makeStyles } from "@mui/styles";

interface StylesProps {
  images: string;
}

export const useStyles = makeStyles({
  hero: (props: StylesProps) => ({
    backgroundImage: `url(${props.images})`,
    backgroundSize: "cover",
    height: "732px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: "10rem",
    textShadow: "2px 2px 4px #000000",
  }),
  text: {
    marginBottom: "1rem",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: "56px",
    lineHeight: "64px",
    width: "30%",
    color: "white",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "23rem"
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
  button2: {
    width: "171px",
    height: "50px",
    borderRadius: "8px",
    padding: "15px 32px 11px 32px",
    gap: "8px",
    fontFamily: "'Bebas Neue', sans-serif",
    fontWeight: 700,
    fontSize: '24px !important',
    lineHeight: '24px !important',
    textShadow: 'none',
    marginLeft: '1rem !important',
    color: '#FFD020  !important'
  }
});
