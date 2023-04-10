import { Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { Box } from '@mui/system';

namespace S {
    export const PortfolioCardContainer = styled(Stack)(({ theme }) => ({
        width: "400px",
        height: "400px",
        borderRadius: "0.5rem",
        boxShadow: theme.palette.primaryShadow,
        padding: "1rem",
        gap: theme.spacing(2)
    }));

    export const portfolioImageContainer = styled(Box)({
        width: "100%",
        height: "60%",
        borderRadius: '0.5rem',
    });

    export const portfolioImage = styled("img")({
        width: "100%",
        height: "100%"
    });

    export const PortfolioDetailContainer = styled(Stack)({
        alignItems: "center",
        justifyContent: "space-between"
    });

    export const PortfolioTitle = styled(Typography)(({ theme }) => ({
        color: theme.palette.text.special,
        fontWeight: 600
    }));

    export const PortfolioDescriptionContainer = styled(Stack)({
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem"
    });

    export const PortfolioDescription = styled(Typography)({
        fontWeight: 500,
        color: "#fff"
    });

    export const PortfolioCardBtn = styled(Button)(({theme}) => ({
        padding: "0.8rem 1rem",
        a:{
            color: theme.palette.text.primary,
        }
    }));
}

export default S;