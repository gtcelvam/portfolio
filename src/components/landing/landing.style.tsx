import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

namespace S {
  export const LandingSection = styled(Box)(({ theme }) => ({
    width: "100%",
    minHeight: "calc(100vh - 90px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.spacing(6),
    padding: "4rem 0",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column-reverse",
      textAlign: "center",
      padding: "2.5rem 0",
    },
  }));

  export const LandingLeftContainer = styled(Box)(({ theme }) => ({
    flex: 1.25,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  }));

  export const GeneralHeadText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "clamp(2.25rem, 4.5vw + 0.5rem, 4rem)",
    fontWeight: 800,
    lineHeight: 1.12,
    marginBottom: "1.25rem",
  }));

  export const GeneralDescText = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "1.075rem",
    lineHeight: 1.75,
    maxWidth: "600px",
  }));

  export const SpecialText = styled("span")({
    background: "linear-gradient(135deg, #6366F1 0%, #14B8A6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  });

  export const LandingLeftBottomSection = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: theme.spacing(6),
    marginTop: "1rem",
    paddingTop: "2rem",
    borderTop:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(15,23,42,0.08)",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(3),
    },
  }));

  export const LandingLeftBottomContentContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "0.75rem",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  }));

  export const LandingWidgetTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.1em",
  }));

  export const LandingWidgetBtnContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  });

  export const SocialIconLink = styled("a")(({ theme }) => ({
    width: 44,
    height: 44,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(15,23,42,0.08)",
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    },
  }));

  export const TechBadge = styled(Box)(({ theme }) => ({
    width: 44,
    height: 44,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.paper,
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.08)"
        : "1px solid rgba(15,23,42,0.08)",
  }));

  export const LandingRightContainer = styled(Box)({
    flex: 0.85,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  export const LandingImageContainer = styled(Box)(({ theme }) => ({
    width: "min(100%, 360px)",
    aspectRatio: "4 / 4.5",
    borderRadius: "28px",
    padding: "10px",
    background:
      "linear-gradient(135deg, rgba(99, 102, 241, 0.35) 0%, rgba(20, 184, 166, 0.25) 100%)",
    boxShadow: (theme.palette as any).primaryShadow,
    overflow: "hidden",
  }));

  export const LandingIcon = styled("img")({
    width: "22px",
    height: "22px",
    objectFit: "contain",
  });

  export const LandingMainImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  });
}

export default S;
