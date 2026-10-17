import { Button, Paper, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const PortfolioCardContainer = styled(Paper)(({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    overflow: "hidden",
    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
    "&:hover": {
      transform: "translateY(-6px)",
      borderColor: theme.palette.primary.main,
      boxShadow: "0 20px 40px -15px rgba(99, 102, 241, 0.25)",
    },
    "&:hover img": {
      transform: "scale(1.05)",
    },
  }));

  export const portfolioImageContainer = styled(Box)({
    width: "100%",
    aspectRatio: "16 / 10",
    overflow: "hidden",
    backgroundColor: "#0F172A",
  });

  export const portfolioImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.45s ease",
  });

  export const PortfolioContent = styled(Box)({
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  });

  export const PortfolioTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 700,
    marginBottom: "0.5rem",
  }));

  export const PortfolioDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    lineHeight: 1.6,
    flex: 1,
  }));

  export const PortfolioCardBtn = styled(Button)({
    marginTop: "1rem",
    padding: "0.6rem 1.2rem",
    borderRadius: "12px",
  });
}

export default S;
