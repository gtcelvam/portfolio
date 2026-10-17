import { styled } from "@mui/system";
import { Box, IconButton } from "@mui/material";

namespace S {
  export const HeaderWrapper = styled(Box, {
    shouldForwardProp: (prop) => prop !== "scrollOn",
  })<{ scrollOn: boolean }>(() => ({
    position: "sticky",
    top: 16,
    zIndex: 1100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "0 1rem",
    transition: "all 0.3s ease",
  }));

  export const HeaderContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "scrollOn",
  })<{ scrollOn: boolean }>(({ scrollOn, theme }) => ({
    width: "min(100%, 960px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.65rem 1.5rem",
    borderRadius: "999px",
    backdropFilter: "blur(20px)",
    backgroundColor: scrollOn
      ? (theme.palette as any).custom?.transparentTheme
      : "rgba(15, 23, 42, 0.45)",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255, 255, 255, 0.1)"
        : "1px solid rgba(15, 23, 42, 0.1)",
    boxShadow: scrollOn ? (theme.palette as any).primaryShadow : "none",
    transition: "all 0.3s ease",
  }));

  export const Brand = styled("a")(({ theme }) => ({
    fontFamily: '"Plus Jakarta Sans", sans-serif',
    fontWeight: 800,
    fontSize: "1.1rem",
    letterSpacing: "-0.03em",
    color: theme.palette.text.primary,
    textDecoration: "none",
  }));

  export const NavUnorderList = styled("ul")(({ theme }) => ({
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    margin: 0,
    padding: 0,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    a: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      fontWeight: 600,
      fontSize: "0.9rem",
      padding: "0.5rem 1rem",
      borderRadius: "999px",
      transition: "all 0.2s ease",
      "&:hover": {
        color: theme.palette.text.primary,
        backgroundColor: "rgba(99, 102, 241, 0.08)",
      },
    },
    ".navActive": {
      color: "#fff !important",
      backgroundColor: theme.palette.primary.main,
      boxShadow: "0 4px 14px rgba(99, 102, 241, 0.4)",
    },
  }));

  export const NavListItem = styled("li")({
    cursor: "pointer",
  });

  export const ThemeSwitcherBtn = styled(IconButton)(({ theme }) => ({
    width: 38,
    height: 38,
    borderRadius: "50%",
    color: theme.palette.text.primary,
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(15,23,42,0.12)",
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.04)"
        : "rgba(15,23,42,0.04)",
  }));
}

export default S;
