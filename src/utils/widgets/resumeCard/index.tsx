import { FC } from "react";
import { ResumeCardDataType } from "../../../types/propsType";
import S from "./resume-card-style";
import { sanitizedExperienceData } from "../../helpers";

const ResumeCard: FC<ResumeCardDataType> = ({ data }) => {
  const cardData = {
    title: data.education || data.companyName || "",
    subtitle: data.place || data.role || "",
    rating:
      data.percentage ||
      data.duration ||
      sanitizedExperienceData(data as any) ||
      "Full-Time",
    description: data.description || data.summary || "",
    icon: data.icon || data.image || "",
  };

  return (
    <S.ResumeCardContainer>
      <S.ResumeCardHeader direction="row" justifyContent="space-between" alignItems="flex-start" spacing={2}>
        <S.ResumeCardTitleContainer>
          {cardData.icon && <S.ResumeCardIcon src={cardData.icon} alt={cardData.title} />}
          <div>
            <S.ResumeCardTitle variant="h6">{cardData.title}</S.ResumeCardTitle>
            <S.ResumeCardSubtitle variant="body2">{cardData.subtitle}</S.ResumeCardSubtitle>
          </div>
        </S.ResumeCardTitleContainer>

        {cardData.rating && (
          <S.ResumeCardRatingContainer>
            <S.ResumeCardRating variant="caption">{cardData.rating}</S.ResumeCardRating>
          </S.ResumeCardRatingContainer>
        )}
      </S.ResumeCardHeader>

      <S.ResumeCardBody>
        <S.ResumeCardDescription variant="body2">{cardData.description}</S.ResumeCardDescription>
      </S.ResumeCardBody>
    </S.ResumeCardContainer>
  );
};

export default ResumeCard;
