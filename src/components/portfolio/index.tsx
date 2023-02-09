import PortfolioCard from '../cards/portfolioCards.tsx';
import PLACEHOLDER from '../../assests/images/portfolio.jpg'
import S from './portfolio.style';

const PortfolioSection = () => {
    //constants
    const portfolioCard = [1, 2, 3, 4, 5, 6];
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
            <S.PortfolioCardContainer container>
                {portfolioCard.map((item) => (
                    <PortfolioCard image={PLACEHOLDER} />
                ))}
            </S.PortfolioCardContainer>
        </S.PortfolioContainer>
    )
}

export default PortfolioSection