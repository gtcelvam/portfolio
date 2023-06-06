import { Chip, Box, Typography } from "@mui/material";
import { Stack, styled } from "@mui/system";
import LaunchIcon from "@mui/icons-material/Launch";

namespace S {
  export const ProjectModalContainer = styled(Stack)(({ theme }) => ({
    minWidth: "30rem",
    minHeight: "40rem",
    [theme.breakpoints.down("sm")]: {
      minWidth: "auto",
      minHeight: "30rem",
    },
  }));

  export const ProjectBanner = styled("img")(() => ({}));

  export const ProjectDetailsContainer = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
    height: "100%",
    gap: theme.spacing(2),
    ".redirect-btn": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.5rem",
      color: theme.palette.text.primary,
    },
  }));

  export const ProjectTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.special,
    fontSize: "1.5rem",
  }));

  export const ProjectDescription = styled(Typography)(({ theme }) => ({
    fontSize: "0.875rem",
    color: theme.palette.text.secondary,
  }));

  export const ProjectTagsContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    padding: "0 1rem",
    flexWrap: "wrap",
    gap: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: "unset",
    },
  }));

  export const ProjectTags = styled(Chip)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
  }));

  export const ProjectRedirectIcon = styled(LaunchIcon)(() => ({
    width: "20px",
    height: "auto",
  }));
}

export default S;
