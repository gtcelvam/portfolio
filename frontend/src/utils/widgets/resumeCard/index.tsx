import { FC } from 'react';
import { ResumeCardDataType } from '../../../types/propsType';
import S from './resume-card-style';


const ResumeCard: FC<ResumeCardDataType> = ({ data }) => {
    let cardData = {
        title: data.education ? data.education : data.companyName,
        subtitle: data.place ? data.place : data.role,
        rating: data.percentage ? data.percentage : data.duration,
        description: data.description ? data.description : data.description,
        icon:data.icon
    }
    return (
        <S.ResumeCardContainer>
            <S.ResumeCardHeader direction={'row'} width={"100%"}>
                <S.ResumeCardHeader gap={'0.3rem'}>
                    <S.ResumeCardTitleContainer>
                    <S.ResumeCardIcon src={cardData.icon} alt='icon'/>
                    <S.ResumeCardTitle>{cardData.title}</S.ResumeCardTitle>
                    </S.ResumeCardTitleContainer>
                    <S.ResumeCardSubtitle variant={'caption'}>{cardData.subtitle}</S.ResumeCardSubtitle>
                </S.ResumeCardHeader>
                <S.ResumeCardRatingContainer>
                    <S.ResumeCardRating variant={'caption'}>{cardData.rating}</S.ResumeCardRating>
                </S.ResumeCardRatingContainer>
            </S.ResumeCardHeader>
            <S.ResumeCardBody>
                <S.ResumeCardDescription variant={'subtitle1'}>{cardData.description}</S.ResumeCardDescription>
            </S.ResumeCardBody>
        </S.ResumeCardContainer>
    )
}

export default ResumeCard