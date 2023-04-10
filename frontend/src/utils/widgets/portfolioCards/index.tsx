import { FC } from 'react';
import { PortfolioCardProps } from '../../../types/propsType';
import S from './portfolio.style';

const PortfolioCard: FC<PortfolioCardProps> = ({ data }) => {
    //constants
    const { title, image, description, link } = data;
    
    return (
        <S.PortfolioCardContainer>
            <S.portfolioImageContainer>
                <S.portfolioImage src={image} alt="card-image" />
            </S.portfolioImageContainer>
            <S.PortfolioDetailContainer direction={'row'}>
                <S.PortfolioTitle>{ title}</S.PortfolioTitle>
                <S.PortfolioTitle></S.PortfolioTitle>
            </S.PortfolioDetailContainer>
            <S.PortfolioDescriptionContainer>
                <S.PortfolioDescription>{description}</S.PortfolioDescription>
                <S.PortfolioCardBtn variant='outlined'><a href={link} target={'_blank'}>See Portfolio</a></S.PortfolioCardBtn>
            </S.PortfolioDescriptionContainer>
        </S.PortfolioCardContainer>
    )
}

export default PortfolioCard