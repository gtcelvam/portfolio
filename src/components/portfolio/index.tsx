import PortfolioCard from '../../utils/widgets/portfolioCards';
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
                    <PortfolioCard key={item} image={PLACEHOLDER} />
                ))}
            </S.PortfolioCardContainer>
        </S.PortfolioContainer>
    )
}

export default PortfolioSection