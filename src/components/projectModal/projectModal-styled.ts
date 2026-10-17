import { Chip, Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/system";
import LaunchIcon from "@mui/icons-material/Launch";

namespace S {
  export const ProjectModalContainer = styled(Stack)({
    width: "min(92vw, 560px)",
    overflow: "hidden",
  });

  export const ProjectBanner = styled("img")({
    width: "100%",
    aspectRatio: "16 / 9",
    objectFit: "cover",
  });

  export const ProjectDetailsContainer = styled(Stack)(({ theme }) => ({
    padding: "1.5rem",
    gap: theme.spacing(2),
  }));

  export const ProjectTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1.35rem",
    fontWeight: 700,
  }));

  export const ProjectDescription = styled(Typography)(({ theme }) => ({
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: theme.palette.text.secondary,
  }));

  export const ProjectTagsContainer = styled(Box)({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  });

  export const ProjectTags = styled(Chip)({
    fontWeight: 600,
  });

  export const ProjectRedirectIcon = styled(LaunchIcon)({
    width: "18px",
    height: "18px",
  });
}

export default S;
