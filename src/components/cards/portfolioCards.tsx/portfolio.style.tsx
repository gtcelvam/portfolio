import { styled } from '@mui/system';
import { Box } from '@mui/system';

namespace S {
    export const PortfolioCardContainer = styled(Box)(({ theme }) => ({
        width: "400px",
        height: "400px",
        border: "1px solid blue",
        borderRadius: "0.5rem",
        boxShadow: theme.palette.primaryShadow
    }));
}

export default S;