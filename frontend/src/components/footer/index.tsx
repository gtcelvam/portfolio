import S from './footer.style';
import AVATAR from '../../assests/images/ts_icon.jpg'

const Footer = () => {
    return (
        <S.FooterContainer>
            <S.FooterProfileIcon src={AVATAR} alt='icon' />
            <S.FooterMainTitle variant='h3'>THAMARAI SELVAN</S.FooterMainTitle>
            <S.FooterSubtitle variant='subtitle1'>&copy; Copyright 2023</S.FooterSubtitle>
        </S.FooterContainer>
    )
}

export default Footer