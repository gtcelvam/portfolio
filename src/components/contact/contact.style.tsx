import { Box, Stack, TextareaAutosize, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';

namespace S {
    export const ContactSectionContainer = styled(Stack)(({ theme }) => ({
        padding: `${theme.spacing(2)} ${theme.spacing(12)}`,
        [theme.breakpoints.down('sm')]: {
            padding:theme.spacing(2)
        }
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
        minHeight: "100vh",
        [theme.breakpoints.down('sm')]: {
            flexDirection:"column"
        }
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

    export const ContactFormContainer = styled(Stack)(({ theme }) => ({
        flex: 2,
        height: "90vh",
        gap: theme.spacing(4),
        padding: theme.spacing(4),
        justifyContent: "space-between",
        boxShadow: theme.palette.primaryShadow,
        borderRadius: "8px"
    }));

    export const ContactTextFieldContainer = styled(Stack)(({ theme }) => ({
        justifyContent: "space-between",
        gap: theme.spacing(4)
    }));

    export const ContactTextField = styled(TextField)(({ size }: { size?: string }) => ({ theme }) => ({
        flex: 1,
        input: {
            height: size === 'medium' ? "300px" : "auto"
        }
    }));
}

export default S;