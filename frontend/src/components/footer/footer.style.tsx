import { styled } from '@mui/system';
import { Box, Typography, Stack } from "@mui/material";

namespace S {
    export const FooterContainer = styled(Stack)(({ theme }) => ({
        minHeight: "50vh",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(2),
        borderTop: '1px solid #494949'
    }));

    export const FooterProfileIcon = styled('img')({
        width: "80px",
        height: "80px",
        borderRadius: "50%"
    });

    export const FooterMainTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary,
        [theme.breakpoints.down('sm')]: {
            fontSize:"14px"
        }
    }));

    export const FooterSubtitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.secondary
    }));
}

export default S