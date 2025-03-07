import { FC } from "react";
import { SkillCardDataType } from "../../../types/propsType";
import S from "./skillscard.style";

const SkillCard: FC<SkillCardDataType> = ({ data }) => {
  return (
    <S.SkillCardContainer>
      <S.SkillCardMainTitle>{data.name}</S.SkillCardMainTitle>
      <S.SkillCardLogoContainer>
        <S.SkillCardLogo src={data.image} alt="icon" />
      </S.SkillCardLogoContainer>
    </S.SkillCardContainer>
  );
};

export default SkillCard;
