import { styled } from "@mui/system";
import { Box } from "@mui/material";

namespace S {
  export const HomeContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "0 1.5rem",
    overflowX: "clip",
    [theme.breakpoints.down("sm")]: {
      padding: "0 1rem",
    },
  }));
}

export default S;
