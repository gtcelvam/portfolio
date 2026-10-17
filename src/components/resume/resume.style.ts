import { Box, Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const ResumeContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "5rem 0",
    scrollMarginTop: "80px",
  });

  export const SectionEyebrow = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.14em",
    marginBottom: "0.5rem",
  }));

  export const ResumeTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: 800,
    marginBottom: "2rem",
  }));

  export const ResumeToggleBtnGrp = styled(ToggleButtonGroup)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    padding: "6px",
    borderRadius: "999px",
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(15,23,42,0.08)",
    marginBottom: "2rem",
    flexWrap: "wrap",
    justifyContent: "center",
  }));

  export const ResumeToggleBtn = styled(ToggleButton)(({ theme }) => ({
    border: "none",
    borderRadius: "999px !important",
    padding: "0.6rem 1.5rem",
    textTransform: "none",
    fontWeight: 600,
    color: theme.palette.text.secondary,
    "&.Mui-selected": {
      backgroundColor: theme.palette.primary.main,
      color: "#fff",
      "&:hover": {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  }));
}

export default S;
