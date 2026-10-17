import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

namespace S {
  export const ContactSectionContainer = styled(Stack)({
    width: "100%",
    padding: "5rem 0",
    scrollMarginTop: "80px",
  });

  export const ContactSubtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    fontWeight: 700,
    fontSize: "0.8rem",
    letterSpacing: "0.14em",
    textAlign: "center",
    marginBottom: "0.5rem",
  }));

  export const ContactTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textAlign: "center",
    fontWeight: 800,
    marginBottom: "3rem",
  }));

  export const ContactDetailSection = styled(Box)(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "1fr 1.65fr",
    gap: theme.spacing(4),
    alignItems: "stretch",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "1fr",
    },
  }));

  export const ContactDetailsCardContainer = styled(Paper)(({ theme }) => ({
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: theme.spacing(3),
    borderRadius: "24px",
  }));

  export const ContactImageContainer = styled(Box)({
    width: "100%",
    aspectRatio: "16 / 10",
    borderRadius: "16px",
    overflow: "hidden",
  });

  export const ContactImage = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  });

  export const ContactDetailsContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "0.35rem",
  });

  export const ContactDetailMainTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    textDecoration: "none",
  })) as any;

  export const ContactDetailSubtile = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  export const ContactLinksContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
  });

  export const SocialBtn = styled("a")(({ theme }) => ({
    width: 42,
    height: 42,
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.primary,
    border:
      theme.palette.mode === "dark"
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(15,23,42,0.12)",
    transition: "all 0.2s ease",
    "&:hover": {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      transform: "translateY(-3px)",
    },
  }));

  export const ContactFormContainer = styled(Paper)({
    padding: "2.25rem",
    borderRadius: "24px",
    display: "flex",
    alignItems: "center",
  });

  export const ContactTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
  });

  export const CustomButton = styled(Button)({
    padding: "0.9rem 1.5rem",
    borderRadius: "12px",
    fontWeight: 700,
  });
}

export default S;
