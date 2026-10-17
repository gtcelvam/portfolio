import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ScrollObserver } from "../../utils/helpers";
import S from "./contact.style";
import ContactCardComponent from "./ContactCard";
import ContactFormComponent from "./ContactForm";

const ContactSection = () => {
  const dispatch = useDispatch();
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (contactRef.current) {
      ScrollObserver(contactRef.current, "contact", dispatch);
    }
  }, [dispatch]);

  return (
    <S.ContactSectionContainer id="contact" ref={contactRef}>
      <S.ContactSubtitle>GET IN TOUCH</S.ContactSubtitle>
      <S.ContactTitle variant="h2">Let&apos;s Work Together</S.ContactTitle>
      <S.ContactDetailSection>
        <ContactCardComponent />
        <ContactFormComponent />
      </S.ContactDetailSection>
    </S.ContactSectionContainer>
  );
};

export default ContactSection;
