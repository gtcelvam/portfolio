import { styled } from '@mui/system';
import { Box, Typography } from "@mui/material";

namespace S {
    export const HomeContainer = styled(Box)(({ theme }) => ({
        width: "100%",
        backgroundColor: theme.palette.background,
        // overflowX: "hidden",
        padding: "0 1rem",
    }));
}

export default S