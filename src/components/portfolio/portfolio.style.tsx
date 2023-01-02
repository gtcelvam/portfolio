import { Typography } from '@mui/material';
import { Stack, styled, } from '@mui/system';
import { Box } from '@mui/system';

namespace S {
    export const PortfolioContainer = styled(Box)({
        width: "100%",
        minHeight: "100vh",
        border: "1px solid red"
    });

    export const PortfolioHeadContainer = styled(Box)({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    });

    export const PortfolioHeadTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.primary
    }));

    export const PorfolioHeadMainTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special
    }));

    export const PortfolioCardContainer = styled(Stack)({
        width: "100%",
        padding: "1rem",
        gap: "1rem"
    });
}

export default S;