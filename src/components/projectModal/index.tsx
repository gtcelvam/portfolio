import { FC } from "react";
import ModalContainer from "../../utils/widgets/modal";
import Button from "@mui/material/Button";
import S from "./projectModal-styled";
import { ProjectModalType } from "../../types/propsType";

const ProjectModal: FC<ProjectModalType> = (props) => {
  //constants
  const { data, open, onClose, customStyles } = props;

  //functions
  const handleClick = () => {
    window.open(data.link);
  };

  return (
    <ModalContainer open={open} onClose={onClose} customStyles={customStyles}>
      <S.ProjectModalContainer>
        <S.ProjectBanner src={data.image} alt={data.title} />
        <S.ProjectDetailsContainer>
          <S.ProjectTitle>{data.title}</S.ProjectTitle>
          <S.ProjectDescription>{data.description}</S.ProjectDescription>
          <S.ProjectDescription alignSelf={"flex-start"}>
            Technologies involved :{" "}
          </S.ProjectDescription>
          <S.ProjectTagsContainer>
            {data.tech.map((item) => (
              <S.ProjectTags key={data.id} label={item} variant="outlined" />
            ))}
          </S.ProjectTagsContainer>
          <Button variant="outlined" onClick={handleClick}>
            View Here
          </Button>
        </S.ProjectDetailsContainer>
      </S.ProjectModalContainer>
    </ModalContainer>
  );
};

export default ProjectModal;
