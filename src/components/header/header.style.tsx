import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

namespace S {
  export const HeaderContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "scrollOn",
  })(({ scrollOn }: { scrollOn: boolean }) => ({ theme }) => ({
    color: theme.palette.text.primary,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    backgroundColor:scrollOn ? theme.palette.custom.transparentTheme : theme.palette.background,
    padding:`0 ${theme.spacing(2)}`,
    zIndex: 10,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    }
  }));

  export const Name = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));

  export const NavUnorderList = styled("ul")(({ theme }) => ({
    listStyleType: "none",
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      width:"100%"
    },
    a: {
      textDecoration: "none",
      color: theme.palette.text.primary
    },
    '.navActive': {
      color:theme.palette.text.special
    }
  }));

  export const NavListItem = styled("li")(({ theme }) => ({
    cursor: "pointer",
  }));

  export const ThemeSwitcherContainer = styled(Box)(({theme}) => ({
    padding: "1%",
    [theme.breakpoints.down('sm')]: {
      position:"fixed",
      bottom: "10px",
      right: "10px",
      display: 'flex',
      alignItems: "center",
      justifyContent: "center",
      background: theme.palette.transparentTheme,
      borderRadius: "50%",
      padding: theme.spacing(1),
      svg: {
        width:"0.8rem",
        height:"0.8rem"
      }
    }
  }));
}

export default S;
