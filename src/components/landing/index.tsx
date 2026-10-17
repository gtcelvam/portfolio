import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";
import { Box, Button, Chip, Stack, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import JS_LOGO from "../../assests/images/jslogo.png";
import TS_LOGO from "../../assests/images/tslogo.png";
import REACT_LOGO from "../../assests/images/react.png";
import NEXT_LOGO from "../../assests/images/nextlogo.png";
import AVATAR_FALLBACK from "../../assests/images/avatar.png";
import { ScrollObserver, handleSocialLink } from "../../utils/helpers";
import { ProfileQuery, SocialLinkQuery } from "../../client/queries";
import {
  RESUME_URL,
  profileID,
  DEFAULT_PROFILE,
  LINKEDIN_URL as FALLBACK_LINKEDIN,
  INSTAGRAM_URL as FALLBACK_INSTAGRAM,
  GITHUB_URL as FALLBACK_GITHUB,
} from "../../utils/constants";
import S from "./landing.style";

const LandingSection = () => {
  const dispatch = useDispatch();
  const landingRef = useRef<HTMLElement>(null);

  const { data } = useQuery(ProfileQuery, {
    variables: { userId: profileID },
  });
  const { data: socialData } = useQuery(SocialLinkQuery);

  const socialLinkList = socialData?.socialLinks;
  const linkedinUrl =
    handleSocialLink(socialLinkList, "LinkedIn", "link") || FALLBACK_LINKEDIN;
  const instagramUrl =
    handleSocialLink(socialLinkList, "Instagram", "link") || FALLBACK_INSTAGRAM;
  const githubUrl =
    handleSocialLink(socialLinkList, "GitHub", "link") || FALLBACK_GITHUB;

  const profileImg = data?.profile?.image || AVATAR_FALLBACK;
  const profileDesc = data?.profile?.description || DEFAULT_PROFILE.description;
  const resumeLink = data?.profile?.resume || RESUME_URL;

  useEffect(() => {
    if (landingRef.current) {
      ScrollObserver(landingRef.current, "home", dispatch);
    }
  }, [dispatch]);

  return (
    <S.LandingSection id="home" ref={landingRef}>
      <S.LandingLeftContainer>
        <Chip
          label="Available for Frontend & Full-Stack Opportunities"
          sx={{
            mb: 2.5,
            px: 1,
            fontWeight: 600,
            bgcolor: "rgba(20, 184, 166, 0.12)",
            color: "#14B8A6",
            border: "1px solid rgba(20, 184, 166, 0.3)",
          }}
        />
        <S.GeneralHeadText variant="h1">
          Hi, I&apos;m <S.SpecialText>Thamarai Selvan</S.SpecialText>
          <br />
          Software Developer.
        </S.GeneralHeadText>

        <S.GeneralDescText>{profileDesc}</S.GeneralDescText>

        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", my: 3.5 }}>
          <Button
            variant="contained"
            size="large"
            href="#portfolio"
            endIcon={<ArrowOutwardRoundedIcon />}
            sx={{ px: 3.5, py: 1.4, borderRadius: "999px" }}
          >
            View Projects
          </Button>
          <Button
            variant="outlined"
            size="large"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<DownloadRoundedIcon />}
            sx={{ px: 3.5, py: 1.4, borderRadius: "999px" }}
          >
            Download CV
          </Button>
        </Box>

        <S.LandingLeftBottomSection>
          <S.LandingLeftBottomContentContainer>
            <S.LandingWidgetTitle>CONNECT WITH ME</S.LandingWidgetTitle>
            <S.LandingWidgetBtnContainer>
              <Tooltip title="LinkedIn">
                <S.SocialIconLink
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon fontSize="small" />
                </S.SocialIconLink>
              </Tooltip>
              <Tooltip title="GitHub">
                <S.SocialIconLink
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon fontSize="small" />
                </S.SocialIconLink>
              </Tooltip>
              <Tooltip title="Instagram">
                <S.SocialIconLink
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon fontSize="small" />
                </S.SocialIconLink>
              </Tooltip>
            </S.LandingWidgetBtnContainer>
          </S.LandingLeftBottomContentContainer>

          <S.LandingLeftBottomContentContainer>
            <S.LandingWidgetTitle>CORE STACK</S.LandingWidgetTitle>
            <S.LandingWidgetBtnContainer>
              {[
                { src: REACT_LOGO, label: "React.js" },
                { src: NEXT_LOGO, label: "Next.js" },
                { src: TS_LOGO, label: "TypeScript" },
                { src: JS_LOGO, label: "JavaScript" },
              ].map((tech) => (
                <Tooltip title={tech.label} key={tech.label}>
                  <S.TechBadge>
                    <S.LandingIcon src={tech.src} alt={tech.label} />
                  </S.TechBadge>
                </Tooltip>
              ))}
            </S.LandingWidgetBtnContainer>
          </S.LandingLeftBottomContentContainer>
        </S.LandingLeftBottomSection>
      </S.LandingLeftContainer>

      <S.LandingRightContainer>
        <S.LandingImageContainer>
          <S.LandingMainImage
            src={profileImg}
            alt="Thamarai Selvan"
            onError={(e: any) => {
              e.currentTarget.src = AVATAR_FALLBACK;
            }}
          />
        </S.LandingImageContainer>
      </S.LandingRightContainer>
    </S.LandingSection>
  );
};

export default LandingSection;
