import { FC, useState } from "react";
import { Box, Chip, Stack } from "@mui/material";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import S from "./portfolio.style";
import ProjectModal from "../../../components/projectModal";
import { projectReturnType } from "../../../types/returnType";

const PortfolioCard: FC<{ data: projectReturnType }> = ({ data }) => {
  const { name, image, description, techStack = [] } = data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <S.PortfolioCardContainer>
        <S.portfolioImageContainer>
          <S.portfolioImage src={image as string} alt={name} loading="lazy" />
        </S.portfolioImageContainer>

        <S.PortfolioContent>
          <S.PortfolioTitle variant="h6">{name}</S.PortfolioTitle>
          <S.PortfolioDescription variant="body2">
            {description}
          </S.PortfolioDescription>

          <Box sx={{ display: "flex", gap: 0.75, flexWrap: "wrap", my: 1.5 }}>
            {techStack.slice(0, 4).map((tech, idx) => (
              <Chip
                key={name + "-" + tech + "-" + idx}
                label={tech}
                size="small"
                sx={{
                  fontSize: "0.72rem",
                  height: 24,
                  bgcolor: "rgba(99, 102, 241, 0.1)",
                  color: "primary.light",
                }}
              />
            ))}
          </Box>

          <S.PortfolioCardBtn
            variant="contained"
            fullWidth
            endIcon={<ArrowOutwardRoundedIcon fontSize="small" />}
            onClick={() => setIsOpen(true)}
          >
            Explore Details
          </S.PortfolioCardBtn>
        </S.PortfolioContent>
      </S.PortfolioCardContainer>

      {isOpen && (
        <ProjectModal
          data={data}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default PortfolioCard;
