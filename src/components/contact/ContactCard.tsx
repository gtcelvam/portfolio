import React from "react";
import S from "./contact.style";
import CONTACT from "../../assests/images/contact.png";
import { Box, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from "../../utils/constants";

const ContactCardComponent = () => {
  return (
    <S.ContactDetailsCardContainer>
      <S.ContactImageContainer>
        <S.ContactImage src={CONTACT} alt="Contact Thamarai Selvan" />
      </S.ContactImageContainer>

      <S.ContactDetailsContainer>
        <S.ContactDetailMainTitle variant="h5" fontWeight={800}>
          Thamarai Selvan
        </S.ContactDetailMainTitle>
        <S.ContactDetailSubtile variant="subtitle2" sx={{ color: "primary.main", fontWeight: 700 }}>
          Full-Stack & Frontend Developer
        </S.ContactDetailSubtile>
        <S.ContactDetailSubtile variant="body2" sx={{ my: 1 }}>
          Available for full-time roles and high-impact freelance projects. Reach out directly via email or phone.
        </S.ContactDetailSubtile>

        <Stack spacing={1.25} sx={{ mt: 1 }}>
          <Box display="flex" alignItems="center" gap={1.5}>
            <PhoneRoundedIcon fontSize="small" color="primary" />
            <S.ContactDetailMainTitle variant="body2" component="a" href="tel:+919698229654">
              +91 96982 29654
            </S.ContactDetailMainTitle>
          </Box>
          <Box display="flex" alignItems="center" gap={1.5}>
            <EmailRoundedIcon fontSize="small" color="primary" />
            <S.ContactDetailMainTitle variant="body2" component="a" href="mailto:gtcelan@gmail.com">
              gtcelan@gmail.com
            </S.ContactDetailMainTitle>
          </Box>
        </Stack>
      </S.ContactDetailsContainer>

      <S.ContactLinksContainer>
        <S.ContactDetailSubtile variant="caption" fontWeight={700} letterSpacing="0.1em">
          SOCIAL PROFILES
        </S.ContactDetailSubtile>
        <Stack direction="row" spacing={1.5}>
          <S.SocialBtn href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon fontSize="small" />
          </S.SocialBtn>
          <S.SocialBtn href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon fontSize="small" />
          </S.SocialBtn>
          <S.SocialBtn href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon fontSize="small" />
          </S.SocialBtn>
        </Stack>
      </S.ContactLinksContainer>
    </S.ContactDetailsCardContainer>
  );
};

export default ContactCardComponent;
