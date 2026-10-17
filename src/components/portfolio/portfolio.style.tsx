import { Typography, Box } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const PortfolioContainer = styled(Box)({
    width: "100%",
    padding: "5rem 0",
    scrollMarginTop: "80px",
  });

  export const PortfolioHeadContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "3rem",
    textAlign: "center",
  });

  export const PortfolioHeadTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.14em",
    marginBottom: "0.5rem",
  }));

  export const PorfolioHeadMainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontWeight: 800,
  }));
}

export default S;
