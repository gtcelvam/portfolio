import S from './resume-card-style';


const ResumeCard = () => {
    return (
        <S.ResumeCardContainer>
            <S.ResumeCardHeader direction={'row'} width={"100%"}>
                <S.ResumeCardHeader>
                    <S.ResumeCardTitle>BE - Civil Engineering</S.ResumeCardTitle>
                    <S.ResumeCardSubtitle>Rvs Technical Campus</S.ResumeCardSubtitle>
                </S.ResumeCardHeader>
                <S.ResumeCardRatingContainer>
                    <S.ResumeCardRating>6.47 CGPA</S.ResumeCardRating>
                </S.ResumeCardRatingContainer>
            </S.ResumeCardHeader>
            <S.ResumeCardBody>
                <S.ResumeCardDescription>lorem sdjsljslj insdklsd</S.ResumeCardDescription>
            </S.ResumeCardBody>
        </S.ResumeCardContainer>
    )
}

export default ResumeCard