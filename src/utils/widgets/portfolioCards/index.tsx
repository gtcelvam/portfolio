import { FC, useState } from "react";
import { PortfolioCardProps } from "../../../types/propsType";
import S from "./portfolio.style";
import ProjectModal from "../../../components/projectModal";

const PortfolioCard: FC<PortfolioCardProps> = ({ data }) => {
  //constants
  const { id, title, image, description, link } = data;

  //state values
  const [isOpen, setIsOpen] = useState(false);

  //functions
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <S.PortfolioCardContainer>
        <S.portfolioImageContainer>
          <S.portfolioImage src={image} alt="card-image" />
        </S.portfolioImageContainer>
        <S.PortfolioDetailContainer direction={"row"}>
          <S.PortfolioTitle>{title}</S.PortfolioTitle>
          <S.PortfolioTitle></S.PortfolioTitle>
        </S.PortfolioDetailContainer>
        <S.PortfolioDescriptionContainer>
          <S.PortfolioDescription>{description}</S.PortfolioDescription>
          <S.PortfolioCardBtn
            variant="contained"
            onClick={() => setIsOpen(true)}
          >
            More Details
          </S.PortfolioCardBtn>
        </S.PortfolioDescriptionContainer>
      </S.PortfolioCardContainer>
      {/* Project Modal is here */}
      {isOpen && <ProjectModal data={data} open={true} onClose={handleClose} />}
    </>
  );
};

export default PortfolioCard;
