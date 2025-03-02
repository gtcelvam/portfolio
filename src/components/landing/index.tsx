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
import { useEffect, useRef } from "react";
import { useQuery } from "@apollo/client";
import { ScrollObserver, handleSocialLink } from "../../utils/helpers";
import { useDispatch } from "react-redux";
import { ProfileQuery, SocialLinkQuery } from "../../client/queries";
import { RESUME_URL, profileID } from "../../utils/constants";
import S from "./landing.style";

const LandingSection = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const { loading, data, error } = useQuery(ProfileQuery, {
    variables: {
      userId: profileID,
    },
  });

  const {
    loading: isSocialLoading,
    data: socialData,
    error: socialError,
  } = useQuery(SocialLinkQuery);

  //constant
  const landingRef = useRef<HTMLElement>(null);
  const socilaLinkList = socialData?.socialLinks;
  const LINKEDIN_URL = handleSocialLink(socilaLinkList, "LinkedIn", "link");
  const INSTAGRAM_URL = handleSocialLink(socilaLinkList, "Instagram", "link");
  const GITHUB_URL = handleSocialLink(socilaLinkList, "GitHub", "link");

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
          <S.GeneralDescText>{data?.profile?.description}</S.GeneralDescText>
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
                <a href={data?.profile?.resume || RESUME_URL} target="_blank">
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
            <S.LandingMainImage src={data.profile.image} alt="ts-image" />
          )}
        </S.LandingImageContainer>
      </S.LandingRightContainer>
    </S.LandingSection>
  );
};

export default LandingSection;
