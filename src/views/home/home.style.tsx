import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";

namespace S {
  export const HomeContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    background: theme.palette.background,
    backgroundSize: "150% 150%",
    // overflowX: "hidden",
    padding: "0 1rem",
    "@keyframes GRADIENT_ANIME": {},
  }));
}

export default S;
