import PortfolioCard from '../cards/portfolioCards.tsx';
import S from './portfolio.style';

const PortfolioSection = () => {
    return (
        <S.PortfolioContainer>
            <S.PortfolioHeadContainer>
                <S.PortfolioHeadTitle>
                    Visit MY Work Here
                </S.PortfolioHeadTitle>
                <S.PorfolioHeadMainTitle variant='h3'>
                    MY PORTFOLIO
                </S.PorfolioHeadMainTitle>
            </S.PortfolioHeadContainer>
            <S.PortfolioCardContainer>
                <PortfolioCard />
            </S.PortfolioCardContainer>
        </S.PortfolioContainer>
    )
}

export default PortfolioSection