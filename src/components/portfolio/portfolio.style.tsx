import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Box } from "@mui/system";

namespace S {
  export const PortfolioContainer = styled(Box)({
    width: "100%",
    minHeight: "100vh",
    opacity: 0,
    transition: "all 0.4s ease-in-out",
    "&.portfolio-active": {
      opacity: 1,
    },
  });

  export const PortfolioHeadContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  });

  export const PortfolioHeadTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
  }));

  export const PorfolioHeadMainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.special,
  }));

  export const PortfolioCardContainer = styled(Grid)({
    width: "100%",
    padding: "1rem",
    gap: "1.5rem",
    justifyContent: "space-around",
    gridTemplateColumns: "1fr 1fr 1fr",
  });
}

export default S;
