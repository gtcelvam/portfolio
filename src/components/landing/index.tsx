import IconButton from '../button/iconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import JS_LOGO from "../../assests/images/jslogo.png";
import TS_LOGO from "../../assests/images/tslogo.png";
import REACT_LOGO from "../../assests/images/react.png";
import BLAZZER_MAN from '../../assests/images/blazzer.jpg';
import S from './landing.style';

const LandingSection = () => {
    return (
        <S.LandingSection>
            <S.LandingLeftContainer>
                <S.LandingLeftTopSection>
                    <S.WelcomeText>WELCOME TO MY WORLD</S.WelcomeText>
                    <S.GeneralHeadText variant='h1'>Hi,This is <S.SpecialText>Thamarai Selvan</S.SpecialText> a developer.</S.GeneralHeadText>
                    <S.GeneralDescText>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction. I’m not adding motion just to spruce things up, but doing it in ways that.</S.GeneralDescText>
                </S.LandingLeftTopSection>
                <S.LandingLeftBottomSection>
                    <S.LandingLeftBottomContentContainer>
                        <S.LandingWidgetTitle>FIND WITH ME</S.LandingWidgetTitle>
                        <S.LandingWidgetBtnContainer>
                            <IconButton><FacebookIcon /></IconButton>
                            <IconButton><InstagramIcon /></IconButton>
                            <IconButton><LinkedInIcon /></IconButton>
                        </S.LandingWidgetBtnContainer>
                    </S.LandingLeftBottomContentContainer>
                    <S.LandingLeftBottomContentContainer>
                        <S.LandingWidgetTitle>BEST SKILL ON</S.LandingWidgetTitle>
                        <S.LandingWidgetBtnContainer>
                            <IconButton><S.LandingIcon src={JS_LOGO} alt="js-logo" /></IconButton>
                            <IconButton><S.LandingIcon src={REACT_LOGO} alt="js-logo" /></IconButton>
                            <IconButton><S.LandingIcon src={TS_LOGO} alt="js-logo" /></IconButton>
                        </S.LandingWidgetBtnContainer>
                    </S.LandingLeftBottomContentContainer>
                </S.LandingLeftBottomSection>
            </S.LandingLeftContainer>
            <S.LandingRightContainer>
                <S.LandingImageContainer>
                    <S.LandingMainImage src={BLAZZER_MAN} alt="ts-image" />
                </S.LandingImageContainer>
            </S.LandingRightContainer>
        </S.LandingSection>
    )
}

export default LandingSection;