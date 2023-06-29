import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { ScrollObserver } from "../../utils/helpers";
import S from "./contact.style";
import ContactCardComponent from "./ContactCard";
import ContactFormComponent from "./ContactForm";
import { useComponentStatus } from "../../utils/helpers/hooks";

const ContactSection = () => {
  //constructor
  const dispatch = useDispatch();

  //state values
  const contactRef = useRef<HTMLElement>(null);

  //constants
  const componentId = useComponentStatus("contact");

  useEffect(() => {
    if (contactRef.current) {
      ScrollObserver(contactRef.current, "contact", dispatch);
    }
  }, []);

  useEffect(() => {
    if (contactRef.current) {
      let contactClass = contactRef.current?.classList;
      let isClassPresent = contactClass?.contains("contact-active");
      if (componentId && !isClassPresent) contactClass?.add("contact-active");
    }
  }, [componentId]);

  return (
    <S.ContactSectionContainer id="contact" ref={contactRef}>
      <S.ContactSubtitle>Contact</S.ContactSubtitle>
      <S.ContactTitle variant="h1">Contact With Me</S.ContactTitle>
      <S.ContactDetailSection direction={"row"}>
        <ContactCardComponent />
        <ContactFormComponent />
      </S.ContactDetailSection>
    </S.ContactSectionContainer>
  );
};

export default ContactSection;
