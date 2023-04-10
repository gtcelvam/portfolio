import { useEffect,useRef } from "react";
import { useDispatch } from "react-redux";
import { ScrollObserver } from "../../utils/helpers";
import S from './contact.style';
import ContactCardComponent from './ContactCard';
import ContactFormComponent from './ContactForm';

const ContactSection = () => {
    //constructor
  const dispatch = useDispatch();

    const contactRef = useRef(null);

  useEffect(() => {
    if (contactRef.current) {
      ScrollObserver(contactRef.current, "contact", dispatch);
    }
  }, []);
    
    return (
        <S.ContactSectionContainer id='contact' ref={contactRef}>
            <S.ContactSubtitle>Contact</S.ContactSubtitle>
            <S.ContactTitle variant="h1">Contact With Me</S.ContactTitle>
            <S.ContactDetailSection direction={'row'}>
                <ContactCardComponent />
                <ContactFormComponent />
            </S.ContactDetailSection>
        </S.ContactSectionContainer>
    )
}

export default ContactSection;