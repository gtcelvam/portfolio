import React from 'react';
import S from './contact.style';

const ContactFormComponent = () => {
    return (
        <S.ContactFormContainer>
            <S.ContactTextFieldContainer direction={'row'}>
                <S.ContactTextField label='Your Name' />
                <S.ContactTextField type='number' label='Phone Number' />
            </S.ContactTextFieldContainer>
            <S.ContactTextFieldContainer>
                <S.ContactTextField type='email' label='Your Email' />
            </S.ContactTextFieldContainer>
            <S.ContactTextFieldContainer>
                <S.ContactTextField type='text' label='Subject' />
            </S.ContactTextFieldContainer>
            <S.ContactTextFieldContainer>
                <S.ContactTextField type='text' label='Your Message' size='medium' />
            </S.ContactTextFieldContainer>
        </S.ContactFormContainer>
    )
}

export default ContactFormComponent