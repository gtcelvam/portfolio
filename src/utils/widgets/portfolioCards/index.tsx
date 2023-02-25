import { FC } from 'react';
import S from './portfolio.style';

type PortfolioCardProps = {
    image: string
}

const PortfolioCard: FC<PortfolioCardProps> = ({ image }) => {
    return (
        <S.PortfolioCardContainer>
            <S.portfolioImageContainer>
                <S.portfolioImage src={image} alt="card-image" />
            </S.portfolioImageContainer>
            <S.PortfolioDetailContainer direction={'row'}>
                <S.PortfolioTitle>Project Title</S.PortfolioTitle>
                <S.PortfolioTitle>Project Date</S.PortfolioTitle>
            </S.PortfolioDetailContainer>
            <S.PortfolioDescriptionContainer>
                <S.PortfolioDescription>lorem ipsum</S.PortfolioDescription>
                <S.PortfolioCardBtn variant='outlined'>See Portfolio</S.PortfolioCardBtn>
            </S.PortfolioDescriptionContainer>
        </S.PortfolioCardContainer>
    )
}

export default PortfolioCard