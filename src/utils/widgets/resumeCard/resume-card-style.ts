import { Paper, Typography, Box, Stack } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const ResumeCardContainer = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "1.75rem",
    borderRadius: "20px",
    gap: "1.25rem",
    transition: "all 0.25s ease",
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: theme.palette.primary.main,
    },
  }));

  export const ResumeCardHeader = styled(Stack)({
    width: "100%",
  });

  export const ResumeCardTitleContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  });

  export const ResumeCardIcon = styled("img")({
    width: "48px",
    height: "48px",
    borderRadius: "12px",
    objectFit: "cover",
    backgroundColor: "#fff",
    padding: "2px",
  });

  export const ResumeCardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 700,
    color: theme.palette.text.primary,
  }));

  export const ResumeCardSubtitle = styled(Typography)(({ theme }) => ({
    fontWeight: 500,
    color: theme.palette.text.secondary,
  }));

  export const ResumeCardRatingContainer = styled(Box)({
    padding: "0.35rem 0.85rem",
    borderRadius: "999px",
    backgroundColor: "rgba(99, 102, 241, 0.12)",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    whiteSpace: "nowrap",
  });

  export const ResumeCardRating = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.light,
    fontWeight: 700,
  }));

  export const ResumeCardBody = styled(Box)({
    width: "100%",
  });

  export const ResumeCardDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    lineHeight: 1.7,
  }));
}

export default S;
