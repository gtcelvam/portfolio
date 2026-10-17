import { styled } from "@mui/system";
import { Typography, Stack } from "@mui/material";

namespace S {
  export const FooterContainer = styled(Stack)(({ theme }) => ({
    padding: "3.5rem 0",
    marginTop: "2rem",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1.5),
    borderTop:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255, 255, 255, 0.08)"
        : "1px solid rgba(15, 23, 42, 0.08)",
  }));

  export const FooterProfileIcon = styled("img")({
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    objectFit: "cover",
  });

  export const FooterMainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    letterSpacing: "0.04em",
  }));

  export const FooterSubtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));
}

export default S;
