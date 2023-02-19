import { FC } from 'react';
import { ResumeCardDataType } from '../../../types/propsType';
import S from './resume-card-style';


const ResumeCard: FC<ResumeCardDataType> = ({ data }) => {
    let cardData = {
        title: data.education ? data.education : data.companyName,
        subtitle: data.place ? data.place : data.role,
        rating: data.percentage ? data.percentage : data.duration,
        description: data.description ? data.description : data.location
    }
    return (
        <S.ResumeCardContainer>
            <S.ResumeCardHeader direction={'row'} width={"100%"}>
                <S.ResumeCardHeader>
                    <S.ResumeCardTitle>{cardData.title}</S.ResumeCardTitle>
                    <S.ResumeCardSubtitle>{cardData.subtitle}</S.ResumeCardSubtitle>
                </S.ResumeCardHeader>
                <S.ResumeCardRatingContainer>
                    <S.ResumeCardRating>{cardData.rating}</S.ResumeCardRating>
                </S.ResumeCardRatingContainer>
            </S.ResumeCardHeader>
            <S.ResumeCardBody>
                <S.ResumeCardDescription>{cardData.description}</S.ResumeCardDescription>
            </S.ResumeCardBody>
        </S.ResumeCardContainer>
    )
}

export default ResumeCard