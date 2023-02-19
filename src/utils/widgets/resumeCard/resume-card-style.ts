import Typography from '@mui/material/Typography';
import { Box, Stack, styled } from '@mui/system'


namespace S {
    export const ResumeCardContainer = styled(Box)({
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem"
    });

    export const ResumeCardHeader = styled(Stack)({
        alignItems: "center",
        justifyContent: "space-between",
    });


    export const ResumeCardTitle = styled(Typography)(({ theme }) => ({
        fontWeight: 600,
        color: theme.palette.text.primary
    }));

    export const ResumeCardSubtitle = styled(Typography)(({ theme }) => ({
        fontWeight: 500,
        color: theme.palette.text.primary
    }));

    export const ResumeCardRatingContainer = styled(Box)(({ theme }) => ({
        width: "fit-content",
        height: "50px",
        boxShadow: theme.palette.primaryShadow,
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        padding: `0 ${theme.spacing(2)}`
    }));

    export const ResumeCardRating = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special
    }));

    export const ResumeCardBody = styled(Box)({

    });

    export const ResumeCardDescription = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));
}

export default S;