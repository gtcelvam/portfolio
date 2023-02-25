import S from './contact.style';
import ContactCardComponent from './ContactCard';
import ContactFormComponent from './ContactForm';

const ContactSection = () => {
    return (
        <S.ContactSectionContainer>
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