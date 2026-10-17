import { FC } from "react";
import { Button, IconButton, Stack } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ModalContainer from "../../utils/widgets/modal";
import S from "./projectModal-styled";
import { ProjectModalType } from "../../types/propsType";

const ProjectModal: FC<ProjectModalType> = ({ data, open, onClose, customStyles }) => {
  const handleClick = () => {
    if (data.projectLink) {
      window.open(data.projectLink as string, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <ModalContainer open={open} onClose={onClose} customStyles={customStyles}>
      <S.ProjectModalContainer>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ p: 2.5, pb: 1.5 }}>
          <S.ProjectTitle>{data.name}</S.ProjectTitle>
          <IconButton onClick={onClose} size="small">
            <CloseRoundedIcon />
          </IconButton>
        </Stack>

        <S.ProjectBanner src={data.image as string} alt={data.name} />

        <S.ProjectDetailsContainer>
          <S.ProjectDescription>{data.description}</S.ProjectDescription>

          <S.ProjectTagsContainer>
            {(data.techStack || []).map((item, index) => (
              <S.ProjectTags
                key={data.id + "-tag-" + index}
                label={item}
                variant="outlined"
                color="primary"
              />
            ))}
          </S.ProjectTagsContainer>

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleClick}
            endIcon={<S.ProjectRedirectIcon />}
            sx={{ mt: 2 }}
          >
            Launch Live Project
          </Button>
        </S.ProjectDetailsContainer>
      </S.ProjectModalContainer>
    </ModalContainer>
  );
};

export default ProjectModal;
