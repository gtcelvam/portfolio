import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { styled } from '@mui/system';

namespace S {
    export const ResumeContainer = styled(Box)({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        minHeight: "100vh"
    });

    export const ResumeTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special,
        textAlign: 'center',
        fontWeight: 600
    }));

    export const ResumeToggleBtnGrp = styled(ToggleButtonGroup)(({ theme }) => ({
        margin: "0 auto"
    }));

    export const ResumeToggleBtn = styled(ToggleButton)(({ theme }) => ({
        color: theme.palette.text.special,
    }));

    export const ResumeDetailsContainer = styled(Box)(({ theme }) => ({
        width: "10px",
        height: "80vh",
        backgroundColor: "#00000080",
        position: "relative",
        padding: "5rem 0"
    }));

    export const ResumeDetailsHand = styled(Box, { shouldForwardProp: prop => prop !== 'direction' })(({ direction }: { direction: object }) => ({ theme }) => ({
        height: "10px",
        width: "300px",
        backgroundColor: "#00000080",
        position: "absolute",
        ...direction
    }));

    export const ResumeDetailsCard = styled(Box, { shouldForwardProp: prop => prop !== 'direction' })(({ direction }: { direction: object }) => ({ theme }) => ({
        width: "500px",
        height: "250px",
        position: "absolute",
        boxShadow: theme.palette.primaryShadow,
        backgroundColor: theme.palette.background,
        borderRadius: "10px",
        ...direction
    }));
}

export default S;