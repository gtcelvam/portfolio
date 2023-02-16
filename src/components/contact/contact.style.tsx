import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

namespace S {
    export const ContactSectionContainer = styled(Stack)(({ theme }) => ({

    }));

    export const ContactSubtitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special,
        textAlign: "center"
    }));

    export const ContactTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        textAlign: "center"
    }));

    export const ContactDetailSection = styled(Stack)(({ theme }) => ({
        gap: theme.spacing(4),
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
    }));

    export const ContactDetailsCardContainer = styled(Stack)(({ theme }) => ({
        flex: 1,
        height: "90vh",
        padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
        gap: theme.spacing(4),
        boxShadow: theme.palette.primaryShadow,
        borderRadius: "8px"
    }));

    export const ContactImageContainer = styled(Stack)(({ theme }) => ({
        height: "40%",
        borderRadius: "8px"
    }));

    export const ContactImage = styled('img')({
        width: "100%",
        height: "100%",
        borderRadius: "8px"
    });

    export const ContactDetailsContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: theme.spacing(1)
    }));

    export const ContactDetailMainTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));

    export const ContactDetailSubtile = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.secondary
    }));


    export const ContactLinksContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: theme.spacing(4)
    }));

    export const ContactFormContainer = styled(Box)(({ theme }) => ({
        flex: 2,
        height: "90vh",
        border: "1px solid red"
    }));
}

export default S;