import IconButton from '../../utils/widgets/iconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import JS_LOGO from "../../assests/images/jslogo.png";
import TS_LOGO from "../../assests/images/tslogo.png";
import REACT_LOGO from "../../assests/images/react.png";
import BLAZZER_MAN from '../../assests/images/ts.jpg';
import S from './landing.style';
import { useEffect, useRef } from 'react';
import { ScrollObserver } from '../../utils/helpers';
import { useDispatch } from 'react-redux';

const LandingSection = () => {
    //constructor
    const dispatch = useDispatch();

    //constant 
    const landingRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (landingRef.current) {
            let ref = landingRef.current;
            ScrollObserver(ref, 'home', dispatch);
        }
    }, []);

    return (
        <S.LandingSection id='home' ref={landingRef}>
            <S.LandingLeftContainer>
                <S.LandingLeftTopSection>
                    <S.WelcomeText>WELCOME TO MY WORLD</S.WelcomeText>
                    <S.GeneralHeadText variant='h1'>Hi,This is <S.SpecialText>Thamarai Selvan</S.SpecialText>, Software developer.</S.GeneralHeadText>
                    <S.GeneralDescText>Experienced junior software developer with expertise in JavaScript, TypeScript, React, and Material-UI as base, having developed responsive web applications and built user interfaces with 1 year of experience</S.GeneralDescText>
                </S.LandingLeftTopSection>
                <S.LandingLeftBottomSection>
                    <S.LandingLeftBottomContentContainer>
                        <S.LandingWidgetTitle>FIND WITH ME</S.LandingWidgetTitle>
                        <S.LandingWidgetBtnContainer>
                            <IconButton><a href='https://www.linkedin.com/in/thamarai-selvan-851068164/' target="_blank"><LinkedInIcon /></a></IconButton>
                            <IconButton><a href='https://www.instagram.com/gtselvam' target="_blank"><InstagramIcon /></a></IconButton>
                            <IconButton><a href='https://github.com/gtcelvam' target="_blank"><GitHubIcon /></a></IconButton>
                            <IconButton><a href='https://drive.google.com/file/d/1pg27V4RkjaI5zEyIDyAAJk0ebI5kl3oQ/view' target="_blank"><DownloadRoundedIcon/></a></IconButton>
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