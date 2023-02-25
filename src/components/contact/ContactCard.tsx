import React from 'react'
import S from './contact.style';
import CONTACT from '../../assests/images/contact.png'
import { Box } from '@mui/material';
import IconButton from '../../utils/widgets/iconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactCardComponent = () => {
    return (
        <S.ContactDetailsCardContainer>
            <S.ContactImageContainer>
                <S.ContactImage src={CONTACT} alt='contact-image' />
            </S.ContactImageContainer>
            <S.ContactDetailsContainer>
                <S.ContactDetailMainTitle variant='h4'>THAMARAI SELVAN</S.ContactDetailMainTitle>
                <S.ContactDetailSubtile variant='subtitle1'>Web Developer</S.ContactDetailSubtile>
                <S.ContactDetailSubtile variant='subtitle1'>I am available for freelance work. Connect with me via and call in to my account.</S.ContactDetailSubtile>
                <Box display={'flex'} alignItems={'center'}>
                    <S.ContactDetailSubtile variant='subtitle1'>Phone : </S.ContactDetailSubtile>
                    <S.ContactDetailMainTitle variant='subtitle1'>+919698229654</S.ContactDetailMainTitle>
                </Box>
                <Box display={'flex'} alignItems={'center'}>
                    <S.ContactDetailSubtile variant='subtitle1'>Email : </S.ContactDetailSubtile>
                    <S.ContactDetailMainTitle variant='subtitle1'>gtcelan@gmail.com</S.ContactDetailMainTitle>
                </Box>
            </S.ContactDetailsContainer>
            <S.ContactLinksContainer>
                <S.ContactDetailSubtile variant='h6'>FIND ME HERE</S.ContactDetailSubtile>
                <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} gap={'1rem'}>
                    <IconButton><FacebookIcon /></IconButton>
                    <IconButton><InstagramIcon /></IconButton>
                    <IconButton><LinkedInIcon /></IconButton>
                </Box>
            </S.ContactLinksContainer>
        </S.ContactDetailsCardContainer>
    )
}

export default ContactCardComponent