import IconButton from "../../utils/widgets/iconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import JS_LOGO from "../../assests/images/jslogo.png";
import TS_LOGO from "../../assests/images/tslogo.png";
import REACT_LOGO from "../../assests/images/react.png";
import LOADER from "../../assests/images/loader.gif";
import ERROR_AVATAR_IMAGE from "../../assests/images/error_avatar.png";
import S from "./landing.style";
import { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { ScrollObserver } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { ProfileQuery } from "../../client/queries";
import {
  GITHUB_URL,
  INSTAGRAM_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../../utils/constants";

const LandingSection = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const { loading, data, error } = useQuery(ProfileQuery);

  //constant
  const landingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (landingRef.current) {
      let ref = landingRef.current;
      ScrollObserver(ref, "home", dispatch);
    }
  }, []);

  return (
    <S.LandingSection id="home" ref={landingRef}>
      <S.LandingLeftContainer>
        <S.LandingLeftTopSection>
          <S.WelcomeText>WELCOME TO MY WORLD</S.WelcomeText>
          <S.GeneralHeadText variant="h1">
            Hi,This is <S.SpecialText>Thamarai Selvan</S.SpecialText>, Software
            developer.
          </S.GeneralHeadText>
          <S.GeneralDescText>
            Experienced junior software developer with expertise in JavaScript,
            TypeScript, React, and Material-UI as base, having developed
            responsive web applications and built user interfaces with 1 year of
            experience
          </S.GeneralDescText>
        </S.LandingLeftTopSection>
        <S.LandingLeftBottomSection>
          <S.LandingLeftBottomContentContainer>
            <S.LandingWidgetTitle>FIND WITH ME</S.LandingWidgetTitle>
            {/* SOCIAL URLS */}
            <S.LandingWidgetBtnContainer>
              <IconButton>
                <a href={LINKEDIN_URL} target="_blank">
                  <LinkedInIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href={INSTAGRAM_URL} target="_blank">
                  <InstagramIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href={GITHUB_URL} target="_blank">
                  <GitHubIcon />
                </a>
              </IconButton>
              <IconButton>
                <a href={RESUME_URL} target="_blank">
                  <DownloadRoundedIcon />
                </a>
              </IconButton>
            </S.LandingWidgetBtnContainer>
            {/* SOCIAL URLS ENDS HERE*/}
          </S.LandingLeftBottomContentContainer>
          <S.LandingLeftBottomContentContainer>
            <S.LandingWidgetTitle>BEST SKILL ON !</S.LandingWidgetTitle>
            <S.LandingWidgetBtnContainer>
              <IconButton>
                <S.LandingIcon src={JS_LOGO} alt="js-logo" />
              </IconButton>
              <IconButton>
                <S.LandingIcon src={REACT_LOGO} alt="js-logo" />
              </IconButton>
              <IconButton>
                <S.LandingIcon src={TS_LOGO} alt="js-logo" />
              </IconButton>
            </S.LandingWidgetBtnContainer>
          </S.LandingLeftBottomContentContainer>
        </S.LandingLeftBottomSection>
      </S.LandingLeftContainer>
      <S.LandingRightContainer>
        <S.LandingImageContainer>
          {loading ? (
            <S.LandingMainImage src={LOADER} alt="loader" />
          ) : error ? (
            <S.LandingMainImage src={ERROR_AVATAR_IMAGE} alt="error_image" />
          ) : (
            <S.LandingMainImage src={data.profile.url} alt="ts-image" />
          )}
        </S.LandingImageContainer>
      </S.LandingRightContainer>
    </S.LandingSection>
  );
};

export default LandingSection;
