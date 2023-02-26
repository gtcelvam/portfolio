import { useEffect,useRef } from 'react';
import PortfolioCard from '../../utils/widgets/portfolioCards';
import PLACEHOLDER from '../../assests/images/portfolio.jpg'
import S from './portfolio.style';
import { useDispatch } from 'react-redux';
import { ScrollObserver } from '../../utils/helpers';

const PortfolioSection = () => {
    //constructor
    const dispatch = useDispatch();

    //constants
    const portfolioCard = [1, 2, 3, 4, 5, 6];
    const portfolioRef = useRef<HTMLElement>(null);

     useEffect(() => {
         if (portfolioRef.current) {
            let ref = portfolioRef.current;
            ScrollObserver(portfolioRef.current, 'portfolio', dispatch);
        }
    }, []);

    return (
        <S.PortfolioContainer id='portfolio' ref={portfolioRef}>
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