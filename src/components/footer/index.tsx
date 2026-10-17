import S from "./footer.style";
import AVATAR from "../../assests/images/ts_icon.jpg";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterProfileIcon src={AVATAR} alt="Thamarai Selvan" />
      <S.FooterMainTitle variant="h6" fontWeight={800}>
        THAMARAI SELVAN
      </S.FooterMainTitle>
      <S.FooterSubtitle variant="body2">
        &copy; {new Date().getFullYear()} Thamarai Selvan. Crafted with React, TypeScript &amp; MUI.
      </S.FooterSubtitle>
    </S.FooterContainer>
  );
};

export default Footer;
