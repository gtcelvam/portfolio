import { Paper, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const SkillCardContainer = styled(Paper)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.1rem 1.25rem",
    borderRadius: "16px",
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: theme.palette.primary.main,
    },
  }));

  export const SkillCardMainTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 600,
    fontSize: "0.95rem",
    color: theme.palette.text.primary,
  }));

  export const SkillCardLogoContainer = styled(Box)({
    width: "36px",
    height: "36px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  export const SkillCardLogo = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "contain",
  });
}

export default S;
