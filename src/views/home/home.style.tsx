import {styled} from '@mui/system';
import {Box,Typography} from "@mui/material";

namespace S{
    export const HomeContainer = styled(Box)(({theme})=>({
        width:"100%",
        height:"100vh",
        backgroundColor:theme.palette.background,
        overflowX:"hidden",
    }));
}

export default S